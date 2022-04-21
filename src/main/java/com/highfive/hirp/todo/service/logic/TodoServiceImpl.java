package com.highfive.hirp.todo.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.highfive.hirp.todo.domain.Memo;
import com.highfive.hirp.todo.domain.Todo;
import com.highfive.hirp.todo.service.TodoService;
import com.highfive.hirp.todo.store.TodoStore;

@Service
public class TodoServiceImpl implements TodoService {
	@Autowired
	private SqlSession sqlSession;
	
	@Autowired
	private TodoStore tStore;

	@Override
	public List<Todo> printAllToDo() {
		List<Todo> tList = tStore.selectAllToDo(sqlSession);
		return tList;
	}

	@Override
	public int registerToDo(Todo todo) {
		int result = tStore.insertToDo(sqlSession, todo);
		return result;
	}

	@Override
	public int modifyToDo(Todo todo) {
		int result = tStore.updateToDo(sqlSession, todo);
		return result;
	}

	@Override
	public int removeToDo(int todoNo) {
		int result = tStore.deleteToDo(sqlSession, todoNo);
		return result;
	}

	@Override
	public List<Memo> printAllMemo() {
		List<Memo> mList = tStore.selectAllMemo(sqlSession);
		return mList;
	}

	@Override
	public int registerMemo(Memo memo) {
		int result = tStore.insertMemo(sqlSession, memo);
		return result;
	}

	@Override
	public int modifyMemo(Memo memo) {
		int result = tStore.updateMemo(sqlSession, memo);
		return result;
	}

	@Override
	public int removeMemo(int memoNo) {
		int result = tStore.deleteMemo(sqlSession, memoNo);
		return result;
	}
}
