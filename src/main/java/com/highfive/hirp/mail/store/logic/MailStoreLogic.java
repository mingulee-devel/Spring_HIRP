package com.highfive.hirp.mail.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.highfive.hirp.mail.domain.Address;
import com.highfive.hirp.mail.domain.Mail;
import com.highfive.hirp.mail.domain.MailFile;
import com.highfive.hirp.mail.store.MailStore;
@Repository
public class MailStoreLogic implements MailStore{

	@Override
	public List<Mail> selectAllMail(SqlSession sqlSession) {
		List<Mail> mList = sqlSession.selectList("");
		return mList;
	}

	@Override
	public int insertMail(SqlSession sqlSession, Mail mail) {
		int result = sqlSession.insert("", mail);
		return result;
	}

	@Override
	public int deleteMail(SqlSession sqlSession, Mail mail) {
		int result = sqlSession.delete("", mail);
		return result;
	}

	@Override
	public int insertReplyMail(SqlSession sqlSession, Mail mail) {
		int result = sqlSession.insert("", mail);
		return result;
	}

	@Override
	public int insertrelayMail(SqlSession sqlSession, Mail mail) {
		int result = sqlSession.insert("", mail);
		return result;
	}

	@Override
	public int insertMailFile(SqlSession sqlSession, MailFile mailFile) {
		int result = sqlSession.insert("", mailFile);
		return result;
	}

	@Override
	public int insertAddress(SqlSession sqlSession, Address address) {
		int result = sqlSession.insert("", address);
		return result;
	}

	@Override
	public int updateAddress(SqlSession sqlSession, Address address) {
		int result = sqlSession.insert("", address);
		return result;
	}

	@Override
	public int deleteAddress(SqlSession sqlSession, Address address) {
		int result = sqlSession.delete("", address);
		return result;
	}

}
