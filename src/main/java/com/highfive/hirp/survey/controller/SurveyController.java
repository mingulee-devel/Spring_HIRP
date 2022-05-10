package com.highfive.hirp.survey.controller;

import java.io.IOException;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonIOException;
import com.highfive.hirp.common.Search;
import com.highfive.hirp.survey.domain.Survey;
import com.highfive.hirp.survey.domain.SurveyAnswer;
import com.highfive.hirp.survey.domain.SurveyMyStatus;
import com.highfive.hirp.survey.domain.SurveyQuest;
import com.highfive.hirp.survey.domain.SurveyQuestCh;
import com.highfive.hirp.survey.domain.SurveySearch;
import com.highfive.hirp.survey.domain.SurveySub;
import com.highfive.hirp.survey.domain.SurveySubEmpl;
import com.highfive.hirp.survey.domain.SurveyUpdate;
import com.highfive.hirp.survey.service.SurveyService;

@Controller
public class SurveyController {
	@Autowired
	private SurveyService sService;
	
	//설문조사 메인페이지 (최신 리스트 조회)
	@RequestMapping(value="/survey/main.hirp", method=RequestMethod.GET)
	public ModelAndView surveyMain(ModelAndView mv) {
		try {
			String emplId = "TESTID";
			//내가 대상자이면서 응답하지 않은 것 중 진행중인 설문조사 리스트
			List<Survey> myList = sService.selectSubSurveyById(emplId);
			if(!myList.isEmpty()) {
				mv.addObject("myList", myList);
				System.out.println("myList 출력 : " + myList);
			} else {
				mv.addObject("msg1", "내가 응답할 수 있는 리스트 조회 실패");
			}
			//최근 생성된 설문 리스트
			//설문 리스트에 대한 나의 참여 여부
			//질문지랑 대상자 번호 비교해서 두개 조인해서 설문조사 질문지 + 응답여부까지 나오도록 하기
			List<SurveyMyStatus> latestList = sService.selectAllSurvey(emplId);
			if(!latestList.isEmpty()){
				mv.addObject("sList", latestList);
				System.out.println(latestList);
				mv.setViewName("survey/mainSurveyPage");
			} else {
				mv.addObject("msg2", "최신 리스트 조회 실패");
				mv.setViewName("common/errorPage");
			}
			
		} catch(Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		
		
		return mv;
	}
	
	//진행중인 설문 페이지 (리스트 조회)
	@RequestMapping(value="/survey/proceed.hirp", method=RequestMethod.GET)
	public ModelAndView proceedSurvey(ModelAndView mv) {
		String emplId = "TESTID";
		//진행중인 설문 리스트
		//진행중인 설문 리스트에 대한 나의 참여 여부
		//질문지랑 대상자 번호 비교해서 두개 조인해서 설문조사 질문지 + 응답여부까지 나오도록 하기
		try {
			List<SurveyMyStatus> proceedList = sService.selectProceedSurvey(emplId);
			if(!proceedList.isEmpty()) {
				mv.addObject("sList", proceedList);
				System.out.println("proceedList 출력 : " + proceedList);
				mv.setViewName("survey/proceedSurveyPage");
			} else {
				mv.addObject("msg1", "진행중인 리스트 조회 실패");
				mv.setViewName("common/errorPage");
			}
		} catch(Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		
		//응답자 리스트 보기는 버튼 누르면 아래 컨트롤러 실행되도록 해야겠다
		return mv;
	}
	//응답자 리스트 보기 (ajax)
	@ResponseBody
	@RequestMapping(value="/survey/subList.hirp", method=RequestMethod.POST, produces="application/json;charset=utf-8")
	public String proceedSurveySubList(
			@RequestParam("surveyNo") int surveyNo){
		//응답자 리스트 보기 (응답여부까지) -> 팝업창
		List<SurveySubEmpl> subjectList = sService.selectSurveySubByNo(surveyNo);
		if(!subjectList.isEmpty()) {
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			return gson.toJson(subjectList);
		}
		return "";
	}
	
	//마감된 설문 페이지 (리스트 조회)
	@RequestMapping(value="/survey/closed.hirp", method=RequestMethod.GET)
	public ModelAndView closedSurvey(ModelAndView mv) {
		String emplId = "TESTID";
		//마감된 설문 리스트
		//마감된 설문 리스트에 대한 나의 참여 여부
		//질문지랑 대상자 번호 비교해서 두개 조인해서 설문조사 질문지 + 응답여부까지 나오도록 하기
		try {
			List<SurveyMyStatus> closedList = sService.selectClosedSurvey(emplId);
			if(!closedList.isEmpty()) {
				mv.addObject("sList", closedList);
				System.out.println("closedList 출력 : " + closedList);
				mv.setViewName("survey/closedSurveyPage");
			} else {
				mv.addObject("msg1", "마감된 리스트 조회 실패");
				mv.setViewName("common/errorPage");
			}
		} catch(Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		
		return mv;
	}

	//내가 만든 설문 페이지 (리스트 조회)
	@RequestMapping(value="/survey/mySurvey.hirp", method=RequestMethod.GET)
	public ModelAndView wroteSurvey(ModelAndView mv
			, HttpServletRequest request) {
		String emplId = "ID1";
		//아이디 가져옴 (세션에서)
		//내가 만든 설문 리스트
		//설문조사 번호로 설문 대상자 리스트 가져오기
		try {
			List<Survey> wroteList = sService.selectWroteSurvey(emplId);
			if(!wroteList.isEmpty()) {
				mv.addObject("sList", wroteList);
				System.out.println("wroteList 출력 : " + wroteList);
				mv.setViewName("survey/wroteSurveyPage");
			} else {
				mv.addObject("msg1", "내가 작성한 리스트 조회 실패");
				mv.setViewName("common/errorPage");
			}
		} catch(Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		
		return mv;
	}
	

	//설문 정보 등록 페이지
	@RequestMapping(value="/survey/writeInfo.hirp", method=RequestMethod.GET)
	public ModelAndView writeSurveyInfoPage(ModelAndView mv) {
		mv.setViewName("survey/surveyWriteInfo");
		return mv;
	}
	
	//설문 문항 페이지
	@RequestMapping(value="/survey/writeQuest.hirp", method=RequestMethod.GET)
	public ModelAndView writeSurveyQuestPage(ModelAndView mv) {
		mv.setViewName("survey/surveyWriteQuest");
		return mv;
	}
	
	//설문 등록 (설문정보, 응답자 리스트)
	@RequestMapping(value="/survey/addSurveyInfo.hirp", method=RequestMethod.GET)
	public ModelAndView writeSurvey(ModelAndView mv
			,@ModelAttribute Survey survey
			//,@ModelAttribute List<String> subList
			, HttpServletRequest request) {
		
		String emplId = "TESTID";
		survey.setSurveyWriter(emplId);
		
		try {
			//설문 등록
			int result = sService.insertSurvey(survey);
			if(result > 0) {
				mv.setViewName("survey/surveyWriteQuest");
			} else {
				mv.addObject("msg1", "설문조사 정보 추가 실패");
				mv.setViewName("common/errorPage");
			}
		} catch(Exception e) {
			mv.addObject("msg", e.toString());
			mv.setViewName("common/errorPage");
		}
		//설문 문항 추가 1 (비어있지 않을 때) nextval
		//설문 보기 추가 1 (비어있지 않을 때) currval
		//2~4까지 하기
		//설문 대상자 리스트 추가
		return mv;
	}

	//설문 등록 (설문정보, 문항까지 저장 임시저장여부도 가져와서 넣어주기)
	public ModelAndView writeSurvey2(ModelAndView mv
			,@ModelAttribute Survey survey
			,@ModelAttribute List<SurveyQuest> surveyQuest
			,@ModelAttribute List<SurveyQuestCh> qCh
			,@ModelAttribute List<String> subList
			, HttpServletRequest request) {
		
		//설문 등록
		//설문 문항 추가 1 (비어있지 않을 때) nextval
		//설문 보기 추가 1 (비어있지 않을 때) currval
		//2~4까지 하기
		//설문 대상자 리스트 추가
		return mv;
	}

	//대상자 전체 리스트 가져오기(설문 등록할 때 조직도 사용)
	public ModelAndView chooseEmpl(ModelAndView mv) {
		//대상자 리스트 가져오기

		
		return mv;
	}
	
	
	//부서코드로 대상자 리스트 가져오기 (선택한 부서 사람들)
	public ModelAndView chooseEmplByDept(ModelAndView mv
			, @RequestParam("deptCode") String deptCode
			, @RequestParam("lowerDept") String lowerDept) {
		//자기 소속 부서일 때는 부서 사람 OR 하위
		//아닐 때는 해당 부서, 해당 부서의 하위까지, 특정 사람만
		//lowerDept 는 하위 부서까지 넣을 건지 말건지 여부 저장
		HashMap<String, String> surveySubInfo = new HashMap<String, String>();
//		searchInfo.put("deptCode", deptCode);
//		searchInfo.put("lowerDept", lowerDept);
//		searchInfo.put("emplId", emplId);

		return mv;
	}
	
	
	//설문 수정 페이지
	public ModelAndView surveyModifyPage(ModelAndView mv
			, @RequestParam("surveyNo") int surveyNo) {
		//세션 아이디 값이 작성자와 같을 때 수정 페이지 이동 가능(jsp에서 처리)
		
		return mv;
	}
	
	//설문 수정
	public ModelAndView surveyModify(ModelAndView mv
			,@ModelAttribute Survey survey
			,@ModelAttribute List<SurveySub> subList) {
		//진행중일 때는 진행 기간, 대상, 응답 수정 허용 여부, 설문 결과 공개 여부 변경 가능
		//마감했을 땐 진행 기간, 설문 결과 공개 여부 변경 가능
		return mv;
	}
	
	//설문 마감
	public ModelAndView surveyClose(ModelAndView mv
			,@RequestParam("surveyNo") int surveyNo) {
		//자신의 게시글일 때만 마감 버튼이 보이도록 jsp에서 처리
		//survey 상태 마감으로 update
		return mv;
	}
	
	//설문 삭제
	public ModelAndView surveyDelete(ModelAndView mv
			,@ModelAttribute Survey survey) {
		//설문조사 삭제
		
		//SURVEY_TBL만 수정하면 아래 연관된 테이블 전부 삭제되도록 TRIGGER 걸어둠
		//설문조사 대상자 삭제 (SURVEY_TBL SURVEY_NO에 제약조건 걸려있음)
		//설문조사 응답 삭제 (SURVEY_TBL SURVEY_NO에 제약조건 걸려있음)
		//설문조사 문항 삭제 (TRIGGER 걸려있음)
		//survey 에서 q1~q4에 담겨있는 번호 가져와서 담아서 delete 해주기
		//설문조사 문항 보기 삭제 (SURVEY_QUEST QUEST_NO에 제약조건 걸려있음)
		return mv;
	}
	
	
	//설문 응답 페이지 (설문 상세1)
	public ModelAndView surveySubmitPage(ModelAndView mv
			,@RequestParam("surveyNo") int surveyNo
			, HttpServletRequest request) {
		//내가 응답한 내용이 있는지 조회
		//세션에서 자기 아이디 가져오고, surveyNo 같이 넘겨서 응답 가져오기
		//없으면 응답 할 수 있도록 띄워주고, 있으먼 내가 작성한 답변 띄워주기(응답 수정)
//		HttpSession session = request.getSession();
//		Employee employee = (Employee) session.getAttribute("loginMember");
//		String emplId = employee.getEmplId();
		String emplId = "사용자 아이디";
		SurveyUpdate ssUpdate = new SurveyUpdate(emplId, surveyNo);
		
		//번호로 설문조사 정보 가져오기
		//설문조사에 포함된 설문문항 가져오기
		//설문조사 보기 가져오기
		//설문조사 번호, 내 아이디로 나의 응답 가져오기
		
		//응답 수정 페이지
		//응답 제출 페이지
		
		return mv;
	}
	//설문 응답 제출
	public ModelAndView surveySubmit(ModelAndView mv
			,@RequestParam("surveyNo") int surveyNo
			,@ModelAttribute List<SurveyAnswer> surveyAnswer) {
		//insert 할 거니까 설문응답번호 자동 생성됨.
		return mv;
	}
	
	//설문 응답 수정
	public ModelAndView surveySubmitModify(ModelAndView mv
			,@RequestParam("surveyNo") int surveyNo
			,@ModelAttribute List<SurveyAnswer> surveyAnswer) {
		//만약에 설문응답번호가 없으면 surveyNo으로 가져와서 set 해주기
		return mv;
	}
	
	//설문 결과 페이지 (설문 상세2)
	public ModelAndView surveySubmitResult(ModelAndView mv
			,@RequestParam("surveyNo") int surveyNo) {
		
		//번호로 설문조사 정보 가져오기
		//설문조사에 포함된 설문문항 가져오기
		//설문조사 보기 가져오기
		//설문조사 번호로 설문조사 응답 가져오기
		
		return mv;
	}
	//설문 검색
	public ModelAndView surveySearch(ModelAndView mv
			,@ModelAttribute Search search
			,@RequestParam("surveyStatus") String surveyStatus) {
		//surveyStatus 담아서 진행중/마감 설문조사 나누어 검색하기
		//내가 만든 설문은 surveyStatus 비워진 상태, session에서 아이디값 가져오기
		
//		HttpSession session = request.getSession();
//		Employee employee = (Employee) session.getAttribute("loginMember");
//		String emplId = employee.getEmplId();
		String emplId = "사용자 아이디";
		
		SurveySearch surveySearch = new SurveySearch(search);
		if(surveyStatus == null) {
			surveySearch.setEmplId(emplId);
		} else {
			surveySearch.setSurveyStatus(surveyStatus);
		}
		List<Survey> searchList = sService.printSeartchSurvey(surveySearch);
		return mv;
	}

}
