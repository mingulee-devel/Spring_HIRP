package com.highfive.hirp.mail.domain;

import java.sql.Date;

public class Mail {
	private int mailNo;
	private String mailSender;
	private String mailTitle;
	private String mailContents;
	private Date mailDate;
	private String importantMail;
	private String temporaryStorage;
	private String mailWasteBasket;
	private String mailRecipient;
	private String mailReferrer;
	private String fileName;
	private String fileReName;
	private String filePath;
	
	public Mail() {}

	public Mail(int mailNo, String mailSender, String mailTitle, String mailContents, Date mailDate,
			String importantMail, String temporaryStorage, String mailWasteBasket, String mailRecipient,
			String mailReferrer, String fileName, String fileReName, String filePath) {
		super();
		this.mailNo = mailNo;
		this.mailSender = mailSender;
		this.mailTitle = mailTitle;
		this.mailContents = mailContents;
		this.mailDate = mailDate;
		this.importantMail = importantMail;
		this.temporaryStorage = temporaryStorage;
		this.mailWasteBasket = mailWasteBasket;
		this.mailRecipient = mailRecipient;
		this.mailReferrer = mailReferrer;
		this.fileName = fileName;
		this.fileReName = fileReName;
		this.filePath = filePath;
	}

	public int getMailNo() {
		return mailNo;
	}

	public void setMailNo(int mailNo) {
		this.mailNo = mailNo;
	}

	public String getMailSender() {
		return mailSender;
	}

	public void setMailSender(String mailSender) {
		this.mailSender = mailSender;
	}

	public String getMailTitle() {
		return mailTitle;
	}

	public void setMailTitle(String mailTitle) {
		this.mailTitle = mailTitle;
	}

	public String getMailContents() {
		return mailContents;
	}

	public void setMailContents(String mailContents) {
		this.mailContents = mailContents;
	}

	public Date getMailDate() {
		return mailDate;
	}

	public void setMailDate(Date mailDate) {
		this.mailDate = mailDate;
	}

	public String getImportantMail() {
		return importantMail;
	}

	public void setImportantMail(String importantMail) {
		this.importantMail = importantMail;
	}

	public String getTemporaryStorage() {
		return temporaryStorage;
	}

	public void setTemporaryStorage(String temporaryStorage) {
		this.temporaryStorage = temporaryStorage;
	}

	public String getMailWasteBasket() {
		return mailWasteBasket;
	}

	public void setMailWasteBasket(String mailWasteBasket) {
		this.mailWasteBasket = mailWasteBasket;
	}

	public String getMailRecipient() {
		return mailRecipient;
	}

	public void setMailRecipient(String mailRecipient) {
		this.mailRecipient = mailRecipient;
	}

	public String getMailReferrer() {
		return mailReferrer;
	}

	public void setMailReferrer(String mailReferrer) {
		this.mailReferrer = mailReferrer;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileReName() {
		return fileReName;
	}

	public void setFileReName(String fileReName) {
		this.fileReName = fileReName;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	@Override
	public String toString() {
		return "Mail [mailNo=" + mailNo + ", mailSender=" + mailSender + ", mailTitle=" + mailTitle + ", mailContents="
				+ mailContents + ", mailDate=" + mailDate + ", importantMail=" + importantMail + ", temporaryStorage="
				+ temporaryStorage + ", mailWasteBasket=" + mailWasteBasket + ", mailRecipient=" + mailRecipient
				+ ", mailReferrer=" + mailReferrer + ", fileName=" + fileName + ", fileReName=" + fileReName
				+ ", filePath=" + filePath + "]";
	}

}
