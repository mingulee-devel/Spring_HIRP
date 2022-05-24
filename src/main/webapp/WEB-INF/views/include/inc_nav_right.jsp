<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<nav id="nav--right">
    <button class="btn--chat" type="button" 
    	onclick="window.open('/chatMain.hirp','chatting','width=400,height=600,location=no,status=no,scrollbars=no');"></button>
   
    <button class="btn--alarm" type="button">
        <span>3</span>
    </button>
    <button class="btn--star" type="button"></button>
    <button class="btn--profile" type="button">
        <img src="../resources/images/profile.jpg" alt="profile">
        <!-- 유저마다 다른 사진 출력돼야함 -->
    </button>

    <section class="nav--right__info">
        <ul>
            <li><a href="/employee/mypageView1.hirp">내 정보 수정</a></li>
            <li><a href="#">알림 설정</a></li>
            <li><a href="/employee/logout.hirp">로그아웃</a></li>
        </ul>
    </section>
</nav>