package com.highfive.hirp.project.domain;

import java.sql.Date;
// 프로젝트
public class Project {
	private int projectNo;
	private String projectName;
	private Date startDate;
	private Date endDate;
	private String projectManager;
	
	public Project() {}

	public Project(int projectNo, String projectName, Date startDate, Date endDate, String projectManager) {
		super();
		this.projectNo = projectNo;
		this.projectName = projectName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.projectManager = projectManager;
	}

	public int getProjectNo() {
		return projectNo;
	}

	public void setProjectNo(int projectNo) {
		this.projectNo = projectNo;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getProjectManager() {
		return projectManager;
	}

	public void setProjectManager(String projectManager) {
		this.projectManager = projectManager;
	}

	@Override
	public String toString() {
		return "Project [projectNo=" + projectNo + ", projectName=" + projectName + ", startDate=" + startDate
				+ ", endDate=" + endDate + ", projectManager=" + projectManager + "]";
	}
	
}
