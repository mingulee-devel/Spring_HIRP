package com.highfive.hirp.employee.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.highfive.hirp.employee.domain.Employee;

public interface EmployeeStore {

	// 회원가입
	public int insertEmployee(SqlSession sqlSession, Employee employee);
		
	// 로그인
	public Employee selectLoginEmployee(SqlSession sqlSession, Employee employee);
	
	// 마이페이지 출력
	public Employee selectOneById(SqlSession sqlSession, String employeeId);
	
	// 비밀번호 찾기
	public List<Employee> find_pwd(Employee employee, SqlSession sqlSession);
}