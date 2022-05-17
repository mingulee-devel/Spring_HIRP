package com.highfive.hirp.time.user.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.highfive.hirp.time.user.domain.Time;
import com.highfive.hirp.time.user.domain.TimeModify;
import com.highfive.hirp.time.user.domain.Vacation;

public interface TimeStore {

	// 사용자 출근 등록
	int insertWorkStart(SqlSession sqlSession, Time time);

	// 사용자 퇴근 등록
	int updateWorkEnd(SqlSession sqlSession, Time time);
}