(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("deptManage");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_SECONDNAME\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_COLOR\" type=\"STRING\" size=\"50\"/><Column id=\"DEPT_MASTER\" type=\"STRING\" size=\"20\"/><Column id=\"DEPT_HIREDATE\" type=\"DATE\" size=\"20\"/><Column id=\"DEPT_UPPERCODE\" type=\"STRING\" size=\"20\"/><Column id=\"DEPT_LEVEL\" type=\"INT\" size=\"20\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">10</Col><Col id=\"DEPT_NAME\">하이그룹</Col><Col id=\"DEPT_SECONDNAME\">HIGRP</Col><Col id=\"DEPT_COLOR\">#FFD8D8</Col><Col id=\"DEPT_MASTER\">ID1</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">NULL</Col><Col id=\"DEPT_LEVEL\">0</Col></Row><Row><Col id=\"DEPT_CODE\">1010</Col><Col id=\"DEPT_NAME\">경영관리팀</Col><Col id=\"DEPT_SECONDNAME\">BM</Col><Col id=\"DEPT_COLOR\">#FAE0D4</Col><Col id=\"DEPT_MASTER\">ID2</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">10</Col><Col id=\"DEPT_LEVEL\">1</Col></Row><Row><Col id=\"DEPT_CODE\">1020</Col><Col id=\"DEPT_NAME\">영업팀</Col><Col id=\"DEPT_SECONDNAME\">SALES</Col><Col id=\"DEPT_COLOR\">#FAECC5</Col><Col id=\"DEPT_MASTER\">ID3</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">10</Col><Col id=\"DEPT_LEVEL\">1</Col></Row><Row><Col id=\"DEPT_CODE\">102010</Col><Col id=\"DEPT_NAME\">국내영업팀</Col><Col id=\"DEPT_SECONDNAME\">DS</Col><Col id=\"DEPT_COLOR\">#FFFED7</Col><Col id=\"DEPT_MASTER\">ID4</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">1020</Col><Col id=\"DEPT_LEVEL\">2</Col></Row><Row><Col id=\"DEPT_CODE\">102020</Col><Col id=\"DEPT_NAME\">해외영업팀</Col><Col id=\"DEPT_SECONDNAME\">OS</Col><Col id=\"DEPT_COLOR\">#FFFED7</Col><Col id=\"DEPT_MASTER\">ID5</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">1020</Col><Col id=\"DEPT_LEVEL\">2</Col></Row><Row><Col id=\"DEPT_CODE\">102030</Col><Col id=\"DEPT_NAME\">영업관리팀</Col><Col id=\"DEPT_SECONDNAME\">SM</Col><Col id=\"DEPT_COLOR\">#FFFED7</Col><Col id=\"DEPT_MASTER\">ID6</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">1020</Col><Col id=\"DEPT_LEVEL\">2</Col></Row><Row><Col id=\"DEPT_CODE\">1030</Col><Col id=\"DEPT_NAME\">상품기획팀</Col><Col id=\"DEPT_SECONDNAME\">SOP</Col><Col id=\"DEPT_COLOR\">#FAF4C0</Col><Col id=\"DEPT_MASTER\">ID7</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">10</Col><Col id=\"DEPT_LEVEL\">1</Col></Row><Row><Col id=\"DEPT_CODE\">1040</Col><Col id=\"DEPT_LEVEL\">1</Col><Col id=\"DEPT_NAME\">구매팀</Col><Col id=\"DEPT_SECONDNAME\">PCD</Col><Col id=\"DEPT_COLOR\">#E4F7BA</Col><Col id=\"DEPT_MASTER\">ID8</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">10</Col></Row><Row><Col id=\"DEPT_CODE\">1050</Col><Col id=\"DEPT_LEVEL\">1</Col><Col id=\"DEPT_NAME\">물류팀</Col><Col id=\"DEPT_SECONDNAME\">DTB</Col><Col id=\"DEPT_COLOR\">#CEFBC9</Col><Col id=\"DEPT_MASTER\">ID9</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">10</Col></Row><Row><Col id=\"DEPT_CODE\">1060</Col><Col id=\"DEPT_LEVEL\">1</Col><Col id=\"DEPT_NAME\">품질팀</Col><Col id=\"DEPT_SECONDNAME\">QA</Col><Col id=\"DEPT_COLOR\">#D4F4FA</Col><Col id=\"DEPT_MASTER\">ID10</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">10</Col></Row><Row><Col id=\"DEPT_CODE\">1070</Col><Col id=\"DEPT_LEVEL\">1</Col><Col id=\"DEPT_NAME\">생산팀</Col><Col id=\"DEPT_SECONDNAME\">PROD</Col><Col id=\"DEPT_COLOR\">#D9E5FF</Col><Col id=\"DEPT_MASTER\">ID11</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">10</Col></Row><Row><Col id=\"DEPT_CODE\">107010</Col><Col id=\"DEPT_LEVEL\">2</Col><Col id=\"DEPT_NAME\">생산공정팀</Col><Col id=\"DEPT_SECONDNAME\">PRODP</Col><Col id=\"DEPT_COLOR\">#EBF7FF</Col><Col id=\"DEPT_MASTER\">ID12</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">1070</Col></Row><Row><Col id=\"DEPT_CODE\">107020</Col><Col id=\"DEPT_LEVEL\">2</Col><Col id=\"DEPT_NAME\">생산관리팀</Col><Col id=\"DEPT_SECONDNAME\">PRODM</Col><Col id=\"DEPT_COLOR\">#EBF7FF</Col><Col id=\"DEPT_MASTER\">ID13</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">1070</Col></Row><Row><Col id=\"DEPT_CODE\">107030</Col><Col id=\"DEPT_LEVEL\">2</Col><Col id=\"DEPT_NAME\">생산외주팀</Col><Col id=\"DEPT_SECONDNAME\">PRODOS</Col><Col id=\"DEPT_COLOR\">#EBF7FF</Col><Col id=\"DEPT_MASTER\">ID14</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">1070</Col></Row><Row><Col id=\"DEPT_CODE\">1080</Col><Col id=\"DEPT_LEVEL\">1</Col><Col id=\"DEPT_NAME\">제조팀</Col><Col id=\"DEPT_SECONDNAME\">MFT</Col><Col id=\"DEPT_COLOR\">#DAD9FF</Col><Col id=\"DEPT_MASTER\">ID15</Col><Col id=\"DEPT_HIREDATE\">20220426</Col><Col id=\"DEPT_UPPERCODE\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_deptList","15","200","200",null,null,"100",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"122\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:DEPT_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" font=\"normal 12px/normal &quot;Noto Sans KR&quot;\" treelevel=\"bind:DEPT_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("static_dept01","20","15","166","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("부서 관리");
            obj.set_font("normal 500 15pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("static_dept02","20","56","166","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조직도");
            obj.set_font("normal 500 12pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("static_dept03","27","121","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("부서");
            obj.set_font("normal 10pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deptAdd","160","127","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("add_icon");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","190","127","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("delete_icon");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","23","155","162","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","185","155","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("search");
            this.addChild(obj.name, obj);

            obj = new Static("static_deptName","280","40","157","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("부서이름");
            obj.set_font("normal 500 15pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Static("static_deptInfo","280","100","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("부서 정보");
            obj.set_border("0px none,0px none,1px black");
            this.addChild(obj.name, obj);

            obj = new Static("st_deptcolor","280","275","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("부서 색상");
            this.addChild(obj.name, obj);

            obj = new Static("st_deptmaster","280","320","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("부서장");
            this.addChild(obj.name, obj);

            obj = new Static("st_depthiredate","280","365","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("생성일");
            this.addChild(obj.name, obj);

            obj = new Static("st_upperdept","280","410","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("상위 부서");
            this.addChild(obj.name, obj);

            obj = new Static("st_deptlowerdept","280","455","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("하위 부서");
            this.addChild(obj.name, obj);

            obj = new Static("st_deptname","280","140","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("부서명");
            this.addChild(obj.name, obj);

            obj = new Static("st_deptcode","280","185","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("부서코드");
            this.addChild(obj.name, obj);

            obj = new Static("st_deptsecond","280","230","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("부서약어");
            this.addChild(obj.name, obj);

            obj = new Button("btn_edit_deptname","560","140","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("edit_icon");
            this.addChild(obj.name, obj);

            obj = new Static("st_deptcolor2","403","275","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("부서 색상");
            this.addChild(obj.name, obj);

            obj = new Static("st_deptmaster2","403","320","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("부서장");
            this.addChild(obj.name, obj);

            obj = new Static("st_depthiredate2","403","365","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("생성일");
            this.addChild(obj.name, obj);

            obj = new Static("st_deptname2","403","140","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("부서명");
            this.addChild(obj.name, obj);

            obj = new Static("st_deptcode2","403","185","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("부서코드");
            this.addChild(obj.name, obj);

            obj = new Static("st_deptsecond2","403","230","157","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("부서약어");
            this.addChild(obj.name, obj);

            obj = new Button("btn_edit_deptcode","560","185","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("edit_icon");
            this.addChild(obj.name, obj);

            obj = new Button("btn_edit_deptsecond","560","230","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("edit_icon");
            this.addChild(obj.name, obj);

            obj = new Button("btn_edit_deptcolor","560","275","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("edit_icon");
            this.addChild(obj.name, obj);

            obj = new Button("btn_edit_deptmaster","560","320","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("edit_icon");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","278","130","60","2",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","232","5","2",null,null,"5",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_background("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","20","190","190","2",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_background("#b7b7b7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upper","403","415","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("상위 부서명");
            obj.set_font("normal 8pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","403","460","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("하위부서명");
            obj.set_font("normal 8pt/normal \"Noto Sans KR\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_submit","560","575","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("저장");
            obj.set_letterSpacing("0px");
            obj.set_cssclass("save");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","650","575","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("취소");
            obj.set_letterSpacing("0px");
            obj.set_cssclass("cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart","613","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_background("#FFD8D8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart00","627","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#FAE0D4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart01","641","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("#FAECC5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart02","655","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#FAF4C0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart03","669","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_background("#E4F7BA");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart04","683","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_background("#CEFBC9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart05","697","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_background("#D4F4FA");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart06","711","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("#D9E5FF");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart07","725","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_background("#DAD9FF");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart08","739","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_background("#E8D9FF");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart09","753","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_background("#FFD9FA");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart10","767","275","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_background("#FFD9EC");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart11","613","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_background("#FFA7A7");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart00_00","627","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_background("#FFC19E");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart01_00","641","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_background("#FFE08C");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart02_00","655","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_background("#FAED7D");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart03_00","669","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_background("#CEF279");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart04_00","683","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_background("#B7F0B1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart05_00","697","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_background("#B2EBF4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart06_00","711","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_background("#B2CCFF");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart07_00","725","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_background("#B5B2FF");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart08_00","739","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_background("#D1B2FF");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart09_00","753","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_background("#FFB2F5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchart10_00","767","289","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_background("#FFB2D9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptname","394","140","133","30",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_colorchartfromds","470","283","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptcode","394","185","133","30",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptsecond","394","230","133","30",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","st_deptname2","text","ds_dept","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","st_deptcode2","text","ds_dept","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","st_deptsecond2","text","ds_dept","DEPT_SECONDNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","st_deptcolor2","text","ds_dept","DEPT_COLOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","st_deptmaster2","text","ds_dept","DEPT_MASTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","st_depthiredate2","text","ds_dept","DEPT_HIREDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","static_deptName","text","ds_dept","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","btn_colorchartfromds","background","ds_dept","DEPT_COLOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("deptManage.xfdl", function() {
        //오늘 날짜
        var objDate = new nexacro.Date();
        var mm = (objDate.getMonth()+1).toString().padLeft(2, "0");
        var dd = objDate.getDate().toString().padLeft(2, "0");
        var today = objDate.getYear() + mm + dd;

        //load 되었을 때
        this.deptManage_onload = function(obj,e)
        {
        //COLOR 가져오는 거 테스트 해봤음.
        //BINDING 하는 곳에서 BACKGROUND에 DEPT_COLOR 바인딩해서 해결.
        // trace(this.ds_dept.getColumn(this, "DEPT_COLOR"));
        // trace(this.btn_colorchartfromds.background);
        // this.btn_colorchartfromds.set_background(this.ds_dept.getColumn(this, "DEPT_COLOR"));

        //onload 했을 땐 상위부서가 없음 (최상위 그룹이라서)
        	this.btn_upper.set_text("");
        // 	var upperCode = this.ds_dept.getColumn(this, "DEPT_UPPERCODE");
        // 	trace(upperCode);
        // 	var nRow = this.ds_dept.findRow("DEPT_CODE", upperCode);
        // 	trace(nRow);
        // 	this.btn_upper.set_text(this.ds_dept.getColumn(nRow, "DEPT_NAME"));

        	//load 되었을 때 선택된 데이터값을 edt에 set 해줌.
        	this.edt_deptcode.set_value(this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CODE"));
        	this.edt_deptname.set_value(this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME"));
        	this.edt_deptsecond.set_value(this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_SECONDNAME"));

        	//load 되었을 때 DB에서 dept select 해오기
        	this.transaction(
        		"dept_select"// 1.ID
        		,"HirpURL::admin/deptlist.nexa"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_dept=out_dept" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="dept_select")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("조회 성공 : " + this.ds_dept.getRowCount() + "건");
        	}
        }


        //그리드 부서 cell 선택했을 때 상위부서 이름 가져오기
        this.grid_deptList_oncellclick = function(obj,e)
        {
        	//상위부서 이름 가져오기
        	var upperCode = this.ds_dept.getColumn(e.row, "DEPT_UPPERCODE");
        	trace(upperCode);
        	var nRow = this.ds_dept.findRow("DEPT_CODE", upperCode);
        	trace(nRow);
        	this.btn_upper.set_text(this.ds_dept.getColumn(nRow, "DEPT_NAME"));

        	//edit
        	this.edt_deptcode.set_value(this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CODE"));
        	this.edt_deptname.set_value(this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME"));
        	this.edt_deptsecond.set_value(this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_SECONDNAME"));
        };

        //부서 삭제 팝업창 띄우기 -- 일단 ds에서 삭제 완료
        this.btn_delete_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);

        	//ChildFrame.init(strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom [,strUrl]] )
        	var objChild = new ChildFrame("popDeptDelete", "absolute", nLeft, nTop, 300, 400);
        	objChild.set_formurl("FrameBase::deptDeletePopup.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");
        	objChild.showModal(this.getOwnerFrame(), {}, this, "fn_deleteCallback");
        };

        //삭제 팝업 닫히면서 삭제
        this.fn_deleteCallback = function(id, rtn){
        	trace(rtn);
        	//삭제를 누를 땐 rtn이 delete
        	if(rtn == "delete") {
        		this.ds_dept.deleteRow(this.ds_dept.rowposition);
        		//여기서 서버 연결해주어야 하나?
        	}
        	//취소를 누르면 rtn이 cancel
        }

        //부서 추가 팝업창 띄우기
        //부서 추가창에서 부서 정보로 추가해야함.
        this.btn_deptAdd_onclick = function(obj,e)
        {
        	var nLeft = system.clientToScreenX(this, 10);
            var nTop  = system.clientToScreenY(this, 10);

        	//ChildFrame.init(strName, nLeft, nTop, nWidth, nHeight [, nRight, nBottom [,strUrl]] )
        	var objChild = new ChildFrame("popDeptAdd", "absolute", nLeft, nTop, 300, 400);
        	objChild.set_formurl("FrameBase::deptAddPopup.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");
        	objChild.showModal(this.getOwnerFrame(), {}, this, "fn_addCallback");
        };

        //추가 팝업 닫히면서 부서 추가 -- 색상 제외하고 완료
        this.fn_addCallback = function(id, rtn) {
        	trace(rtn);
        	//추가를 누르면 rtn이 값을 담은 string을 반환한다.
        	var nRow = this.ds_dept.rowposition;
        	if(rtn != "cancel"){
        		var sVal = rtn.split(":");
        		trace("deptname: " + sVal[0] + " deptcode: " + sVal[1] + " deptsecond: " + sVal[2]);
         		this.ds_dept.insertRow(nRow+1); //선택한 cell의 다음 위치에 삽입
        		this.ds_dept.setColumn(nRow+1,"DEPT_CODE",sVal[1]);
        		this.ds_dept.setColumn(nRow+1,"DEPT_NAME",sVal[0]);
        		this.ds_dept.setColumn(nRow+1,"DEPT_SECONDNAME",sVal[2]);

        		this.ds_dept.setColumn(nRow+1,"DEPT_HIREDATE", today );
        		this.ds_dept.setColumn(nRow+1,"DEPT_UPPERCODE", this.ds_dept.getColumn(nRow, "DEPT_CODE"));
        		this.ds_dept.setColumn(nRow+1,"DEPT_LEVEL", this.ds_dept.getColumn(nRow, "DEPT_LEVEL") + 1);
        	}
        	//취소를 누르면 rtn이 cancel

        }


        //검색 기능 (like) -- 완료
        this.btn_search_onclick = function(obj,e)
        {
        	var searchVal = this.edt_search.text;
        	trace(searchVal);
        	this.ds_dept.filter("DEPT_NAME.indexOf('" + searchVal + "') > -1 ");
        };


        //저장 버튼 -- 수정 완료
        this.btn_submit_onclick = function(obj,e)
        {
        	//edit에 있는 값을 ds에 저장
        	var nRow = this.ds_dept.rowposition;
        	var nCode = this.edt_deptcode.value;
        	var nName = this.edt_deptname.value;
        	var nSecond = this.edt_deptsecond.value;
        	//trace(nCode, nName, nSecond);
        	if(nCode != null || nCode.length > 0){
        		trace(nCode);
        		this.ds_dept.setColumn(nRow, "DEPT_CODE", nCode);
        	}
        	if(nName != null || nName.length > 0){
        		trace(nName);
        		this.ds_dept.setColumn(nRow, "DEPT_NAME", nName);
        	}
        	if(nSecond != null || nSecond.length > 0){
        		trace(nSecond);
        		this.ds_dept.setColumn(nRow, "DEPT_SECONDNAME", nSecond);
        	}

        	this.edt_deptname.set_visible("false");
        	this.edt_deptcode.set_visible("false");
        	this.edt_deptsecond.set_visible("false");

        };

        //취소 버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	// edit 안에 있는 값 원래 ds에 있는 값으로 돌려놓기
        	var nRow = this.ds_dept.rowposition;
        	this.edt_deptcode.set_value(this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CODE"));
        	this.edt_deptname.set_value(this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME"));
        	this.edt_deptsecond.set_value(this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_SECONDNAME"));
        };


        //dept name 수정 버튼
        this.btn_edit_deptname_onclick = function(obj,e)
        {
        	this.edt_deptname.set_visible("true");
        };
        //dept code 수정 버튼
        this.btn_edit_deptcode_onclick = function(obj,e)
        {
        	this.edt_deptcode.set_visible("true");
        };
        //dept second name 수정 버튼
        this.btn_edit_deptsecond_onclick = function(obj,e)
        {
        	this.edt_deptsecond.set_visible("true");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.deptManage_onload,this);
            this.grid_deptList.addEventHandler("oncellclick",this.grid_deptList_oncellclick,this);
            this.btn_deptAdd.addEventHandler("onclick",this.btn_deptAdd_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.edt_search.addEventHandler("onchanged",this.edt_search_onchanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_edit_deptname.addEventHandler("onclick",this.btn_edit_deptname_onclick,this);
            this.btn_edit_deptcode.addEventHandler("onclick",this.btn_edit_deptcode_onclick,this);
            this.btn_edit_deptsecond.addEventHandler("onclick",this.btn_edit_deptsecond_onclick,this);
            this.btn_submit.addEventHandler("onclick",this.btn_submit_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };
        this.loadIncludeScript("deptManage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
