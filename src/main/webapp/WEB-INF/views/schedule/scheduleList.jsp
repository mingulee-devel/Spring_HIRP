<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<%@ include file="/WEB-INF/views/include/inc_head.jsp" %>
<link rel="stylesheet" href="../../../resources/css/sub.css"><!-- 하이알피 서브페이지 CSS -->

<body>
    <%@ include file="/WEB-INF/views/include/inc_header.jsp" %>

    <div id="conts">
        <aside id="snb">
            <h1>일정관리</h1>
            <button class="btn--function" type="button" onclick="openModal(this);">일정등록</button>
            <section class="section--modal">
                <div class="bg-black"></div>
                <form class="section--modal__conts modal--shcedule" action="/schedule/write.hirp" method="post"
                    enctype="multipart/form-data" style="width:90%; max-width:600px;">
                    <input type="hidden" name="scheduleColor">
                    <input type="hidden" name="scheduleAlarm" value="N">
                    <button class="btn--close" type="button"></button>
                    <h3>일정 등록</h3>
                    <ul>
                        <li>
                            <label class="mr-20" for="">일정명</label><input type="text" name="scheduleTitle">
                        </li>
                        <li class="li--colors">
                            <label class="mr-20" for="">색 선택</label>
                            <div class="colors">
                                <span class="selected" style="background-color: #f3cccc;"></span>
                                <span style="background-color: #f5c2a9;"></span>
                                <span style="background-color: #f5f4a9;"></span>
                                <span style="background-color: #d0de41;"></span>
                                <span style="background-color: #89c64d;"></span>
                                <span style="background-color: #cde7c9;"></span>
                                <span style="background-color: #8fd0cf;"></span>
                                <span style="background-color: #c6b7cf;"></span>
                            </div>
                        </li>
                        <li>
                            <label class="mr-20" for="">일시</label><input type="datetime-local"
                                name="scheduleStartDate">&nbsp;&nbsp;~&nbsp;&nbsp;<input type="datetime-local"
                                name="scheduleEndDate">
                        </li>
                        <li>
                            <label class="mr-20" for="">일정구분</label>
                            <div class="fz-0">
                                <input id="valueA" name="scheduleCategory" type="radio" value="개인" checked>
                                <label class="mr-20" for="valueA">개인일정</label>
                                <input id="valueB" name="scheduleCategory" type="radio" value="부서">
                                <label class="mr-20" for="valueB">부서일정</label>
                                <input id="valueC" name="scheduleCategory" type="radio" value="전사">
                                <label for="valueC">전사일정</label>
                            </div>
                        </li>
                        <li>
                            <label class="mr-20" for="">장소</label><input type="text" name="schedulePlace">
                        </li>
                        <li>
                            <label class="mr-20" for="">내용</label>
                            <textarea name="scheduleConts" id="" cols="20" rows="4"
                                placeholder="상세내용을 입력하세요."></textarea>
                        </li>
                        <li>
                            <label class="mr-20" for="">알림여부</label>
                            <input id="scheduleAlarm" type="checkbox" onclick="getAlarm(this);">
                            <label for="scheduleAlarm" onclick="getAlarm(this.previousSibling);">일정 전날 알림</label>
                        </li>
                    </ul>
                    <div class="btns-wrap mt-20 t-r">
                        <button class="point" type="submit">확인</button>
                        <button class="finished closeWindow" type="button">닫기</button>
                    </div>
                </form>
            </section>
        </aside>

        <article id="sub">
            <%@ include file="/WEB-INF/views/include/inc_nav_right.jsp" %>

            <form class="form--srch" action="#" method="get" enctype="multipart/form-data">
                <input type="text" name="" placeholder="일정 검색">
                <button type="submit"></button>
            </form>

            <h1 class="basic-border-bottom">일정목록</h1>

            <div id="scheduleList" class="subConts padding-0">
                <div id="calendar"></div>
            </div>

            <!-- <pre>
                ※ 일정 추가 관련 필요한 스크립트
                일시 - 시간 시작일과 마감일이 같거나 시작일이 빨라야함.
                => 마감일이 빠를 시 경고창 띄우기
                일정구분 전사일정 선택 시 다른 컨트롤러로 submit.
            </pre> -->
        </article>
    </div>

    <script>
        // let sList = {
        //     'scheduleInfo':${sList}
        // };
        // var scheduleLength = Object.keys(sList.scheduleInfo).length;

        /* 달력 그림 */
        // let temp = '';
        // temp += '[';
        // for(let i=0; i<scheduleLength; i++) {
        //     temp+='{\n'
        //     + '  title: \'' + sList.scheduleInfo[i]["scheduleTitle"] + '\',\n'
        //     + '  start: \'' + sList.scheduleInfo[i]['scheduleStartDate'] + '\',\n'
        //     + '  end: \'' + sList.scheduleInfo[i]['scheduleEndDate'] + '\',\n'
        //     + '  backgroundColor: \'' + sList.scheduleInfo[i]['scheduleColor'] + '\'\n'
        //     + '}'
        //     if(i == scheduleLength-1) {break}
        //     temp += ',\n'
        // };
        // temp += ']';
        // console.log(temp);

        let calendarEl = document.getElementById('calendar');
        let calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'dayGridMonth,dayGridWeek,timeGrid,listWeek',
                center: 'prev,title,next,today',
                right: '',
            },
            buttonText: {
                today: '오늘',
                month: '월간',
                week: '주간',
                timeGrid: '일간',
                list: '목록'
            },
            initialView: 'dayGridMonth',
            locale: 'ko',
            events: [
                <c:forEach items="${sList }" var="schedule">
                {
                    title: '${schedule.scheduleTitle }',
                    start: '${schedule.scheduleStartDate }',
                    end: '${schedule.scheduleEndDate }',
                    backgroundColor: '${schedule.scheduleColor }',
                    borderColor: '${schedule.scheduleColor }',
                },
                </c:forEach>
            ]
        });
        calendar.render();

        /*events: [
        이벤트 예시
        {
            title: 'Meeting',
            start: '2022-04-11T09:45:00',
            extendedProps: { // 외부에서 다른 값 가져오고 싶을 때 custom 키-값
                'status': 'done',
                'photoNo': 1,
                'photoContent': 'flower.png'
            }
        },
        {
            title: 'Birthday Party',
            start: '2022-06-08T18:00:00',
            backgroundColor: 'green',
            borderColor: 'green'
        }
    ],*/
    </script>
    <script src="../../../resources/js/schedule.js"></script>
</body>

</html>