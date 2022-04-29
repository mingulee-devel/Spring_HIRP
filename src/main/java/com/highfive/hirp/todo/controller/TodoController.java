package com.highfive.hirp.todo.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.highfive.hirp.todo.domain.Memo;
import com.highfive.hirp.todo.domain.Todo;
import com.highfive.hirp.todo.service.TodoService;

@Controller
public class TodoController {
	@Autowired
	private TodoService tService;
	
	/* GET과 POST의 구분.
	 * GET 은 클라이언트에서 서버로 어떠한 리소스로 부터 정보를 요청하기 위해 사용되는 메서드이다. 
	 * 예를들면 게시판의 게시물을 조회할 때 쓸 수 있다. GET을 통한 요청은 URL 주소 끝에 파라미터로 포함되어 전송되며, 
	 * 이 부분을 쿼리 스트링 (query string) 이라고 부른다.
	 * 
	 * - GET 요청은 캐시가 가능하다. : GET을 통해 서버에 리소스를 요청할 때 웹 캐시가 요청을 가로채 
	 *   서버로부터 리소스를 다시 다운로드하는 대신 리소스의 복사본을 반환한다. 
	 *   HTTP 헤더에서 cache-control 헤더를 통해 캐시 옵션을 지정할 수 있다. 
	 * - GET 요청은 브라우저 히스토리에 남는다. 
	 * - GET 요청은 북마크 될 수 있다. 
	 * - GET 요청은 길이 제한이 있다 : GET 요청의 길이 제한은 표준이 따로 있는건 아니고 브라우저마다 제한이 다름. 
	 * - GET 요청은 중요한 정보를 다루면 안된다. ( 보안 ) 
	 * - GET은 데이터를 요청할때만 사용 된다.
	 * 
	 * - POST 요청은 캐시되지 않는다.
	 * - POST 요청은 브라우저 히스토리에 남지 않는다.
	 * - POST 요청은 북마크 되지 않는
	 * - POST 요청은 데이터 길이에 제한이 없다.
	 */

	// 할일 조회
	@RequestMapping(value="/todo/list.hirp", method=RequestMethod.GET)
	public ModelAndView todoListView(ModelAndView mv) {
		try {
			List<Todo> tList = tService.printAllToDo();
			List<Memo> mList = tService.printAllMemo();
			// 지금 모든 항목 다 불러오는 쿼리로 써놔서 로그인 세션 만든 후에
			// 아이디 같을 때, 날짜 일치할 때 불러오는 조건 추가로 걸어줘야함. 
			if(!tList.isEmpty() && !mList.isEmpty()) {
				mv.addObject("tList", tList);
				mv.addObject("mList", mList);
				mv.setViewName("todo/todoList");
			}else {
				// 나중에 에러 페이지 하나 만들어서 그리로 가게 처리해줄 것.
				// mv.setViewName("common/errorPage");
				mv.setViewName("todo/todoList");
			}
		} catch(Exception e) {
			// 나중에 에러 페이지 하나 만들어서 그리로 가게 처리해줄 것.
			// mv.setViewName("common/errorPage");
			System.out.println("exception");
		}
		return mv;
	}
	
	// 할일 등록(ajax)
	@ResponseBody
	@RequestMapping(value="/todo/write.hirp", method=RequestMethod.POST)
	public String todoRegister(
			@ModelAttribute Todo todo
			,@RequestParam("todoConts") String todoConts
			,HttpServletRequest request) {
		todo.setEmplId("user1");
		// 임시 처리, 후에 세션으로 수정해야함.
		// 날짜를 추가해줘야해서 Todo 객체 이용하는 것으로 코딩함.
		todo.setTodoConts(todoConts);
		int result = tService.registerToDo(todo);
		if(result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	// 할일 수정(ajax)		
	@ResponseBody
	@RequestMapping(value="/todo/modify.hirp", method=RequestMethod.POST)
	public String todoUpdate(
			@ModelAttribute Todo todo
			,@RequestParam("todoNo") int todoNo
			,@RequestParam("todoConts") String todoConts
			,HttpServletRequest request) {
		todo.setTodoNo(todoNo);
		todo.setTodoConts(todoConts);
		int result = tService.modifyToDo(todo);
		if(result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}

	
	// 할일 체크(ajax)		
	@ResponseBody
	@RequestMapping(value="/todo/checked.hirp", method=RequestMethod.POST)
	public String todoChecked(
			@ModelAttribute Todo todo
			,@RequestParam("isFinished") String isFinished
			,@RequestParam("todoNo") int todoNo
			,HttpServletRequest request) {
		todo.setIsFinished(isFinished);
		todo.setTodoNo(todoNo);
		int result = tService.checkedToDo(todo);
		if(result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	// 할일 삭제(ajax)	
	@ResponseBody
	@RequestMapping(value="/todo/remove.hirp", method=RequestMethod.GET)
	public String todoDelete(
			@RequestParam("todoNo") int todoNo) {
		int result = tService.removeToDo(todoNo);
		if(result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	// 메모 등록(ajax)	
	@ResponseBody
	@RequestMapping(value="/memo/write.hirp", method=RequestMethod.POST)
	public String memoRegister(
			@ModelAttribute Memo memo
			,@RequestParam("memoConts") String memoConts
			,HttpServletRequest request) {
		memo.setEmplId("user1");
		memo.setMemoConts(memoConts);
		int result = tService.registerMemo(memo);
		if(result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	// 메모 수정(ajax)	
	@ResponseBody
	@RequestMapping(value="/memo/modify.hirp", method=RequestMethod.POST)
	public String memoUpdate(
			@ModelAttribute Memo memo
			,@RequestParam("memoNo") int memoNo
			,@RequestParam("memoConts") String memoConts) {
		memo.setMemoNo(memoNo);
		memo.setMemoConts(memoConts);
		int result = tService.modifyMemo(memo);
		if(result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	// 메모 삭제(ajax)	
	@ResponseBody
	@RequestMapping(value="/memo/remove.hirp", method=RequestMethod.GET)
	public String memoDelete(
			@RequestParam("memoNo") int memoNo) {
		int result = tService.removeMemo(memoNo);
		if(result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}
}
