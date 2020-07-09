

function saveBasicDetails()
{
    window.localStorage.setItem("name",document.getElementById("name").value);
    window.localStorage.setItem("email",document.getElementById("email").value);
    window.localStorage.setItem("phone",document.getElementById("phone").value);
    window.localStorage.setItem("role",document.getElementById("role").value);
    console.log("helloe im in");
    document.getElementById("name").readOnly=true;
    document.getElementById("email").readOnly=true;
    document.getElementById("phone").readOnly=true;
    document.getElementById("role").readOnly=true;
}

function editBasicDetails()
{
    document.getElementById("name").value=window.localStorage.getItem("name");
    document.getElementById("email").value=window.localStorage.getItem("email");
    document.getElementById("phone").value=window.localStorage.getItem("phone");
    document.getElementById("role").value=window.localStorage.getItem("role");
    console.log("helloe im in");
    document.getElementById("name").readOnly=false;
    document.getElementById("email").readOnly=false;
    document.getElementById("phone").readOnly=false;
    document.getElementById("role").readOnly=false;
}

function saveObjective()
{
    window.localStorage.setItem("objective",document.getElementById("objective").value);
    document.getElementById("objective").readOnly=true;
}
function editObjective()
{
    document.getElementById("objective").value=window.localStorage.getItem("objective");
    document.getElementById("objective").readOnly=false;
}

function saveCapability()
{
    window.localStorage.setItem("capability",document.getElementById("capability").value);
    document.getElementById("capability").readOnly=true;
}
function editCapability()
{
    document.getElementById("capability").value=window.localStorage.getItem("capability");
    document.getElementById("capability").readOnly=false;
}

function preview()
{
    console.log("inpreview")
    document.getElementById("inname").innerHTML=window.localStorage.getItem("name");
    document.getElementById("inrole").innerHTML=window.localStorage.getItem("role");
    document.getElementById("inemail").innerHTML="Email: " + window.localStorage.getItem("email");
    document.getElementById("inphone").innerHTML="Phone: +91-" + window.localStorage.getItem("phone");
    document.getElementById("inobjective").innerHTML= window.localStorage.getItem("objective");
    document.getElementById("incapability").innerHTML= window.localStorage.getItem("capability");
    document.getElementById("ingraduation").innerHTML= "College: " + window.localStorage.getItem("college")+"<br>"+
                                                        "University: " + window.localStorage.getItem("university")+"<br>"+
                                                        window.localStorage.getItem("course")+", "+window.localStorage.getItem('branch')+"<br>"+
                                                        window.localStorage.getItem('aggregate');
}

function printPageArea(){
    var printContent = document.getElementById("myModal");
    var WinPrint = window.open('', '', 'width=900,height=650');
    console.log("int pring method");
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

function saveGraduation()
{

window.localStorage.setItem("college",document.getElementById("college").value);
window.localStorage.setItem("university",document.getElementById("university").value);    
window.localStorage.setItem("branch",document.getElementById("branch").value);
window.localStorage.setItem("course",document.getElementById("course").value);
window.localStorage.setItem("aggregate",document.getElementById("aggregate").value);
window.localStorage.setItem("startyear",document.getElementById("startyear").value);
window.localStorage.setItem("endyear",document.getElementById("endyear").value);


document.getElementById("college").readOnly=true;
document.getElementById("university").readOnly=true;
document.getElementById("branch").readOnly=true;
document.getElementById("course").readOnly=true;
document.getElementById("aggregate").readOnly=true;
document.getElementById("startyear").readOnly=true;
document.getElementById("endyear").readOnly=true;


}

function saveIntermediate()
{
    window.localStorage.setItem("school12",document.getElementById("school12").value);
    window.localStorage.setItem("board12",document.getElementById("board12").value);
    window.localStorage.setItem("branch12",document.getElementById("branch12").value);
    window.localStorage.setItem("aggregate12",document.getElementById("aggregate12").value);
    window.localStorage.setItem("passingyear12",document.getElementById("passingyear12").value);

document.getElementById("school12").readOnly=true;  
document.getElementById("board12").readOnly=true;
document.getElementById("branch12").readOnly=true;
document.getElementById("aggregate12").readOnly=true;
document.getElementById("passingyear12").readOnly=true;

}

function saveHighSchool()
{
    window.localStorage.setItem("school10",document.getElementById("school10").value);
    window.localStorage.setItem("board10",document.getElementById("board10").value);
    window.localStorage.setItem("branch10",document.getElementById("branch10").value);
    window.localStorage.setItem("aggregate10",document.getElementById("aggregate10").value);
    window.localStorage.setItem("passingyear10",document.getElementById("passingyear10").value);

    document.getElementById("school10").readOnly=true;  
document.getElementById("board10").readOnly=true;
document.getElementById("branch10").readOnly=true;
document.getElementById("aggregate10").readOnly=true;
document.getElementById("passingyear10").readOnly=true;
}

function editGraduation()
{
document.getElementById("college").value=window.localStorage.getItem("college");
document.getElementById("university").value=window.localStorage.getItem("university");    
document.getElementById("branch").value=window.localStorage.getItem("branch");
document.getElementById("course").value=window.localStorage.getItem("course");
document.getElementById("aggregate").value=window.localStorage.getItem("aggregate");
document.getElementById("startyear").value=window.localStorage.getItem("startyear");
document.getElementById("endyear").value=window.localStorage.getItem("endyear");

document.getElementById("college").readOnly=false;
document.getElementById("university").readOnly=false;
document.getElementById("branch").readOnly=false;
document.getElementById("course").readOnly=false;
document.getElementById("aggregate").readOnly=false;
document.getElementById("startyear").readOnly=false;
document.getElementById("endyear").readOnly=false;


}

function editIntermediate()
{
document.getElementById("school12").value=window.localStorage.getItem("school12")
document.getElementById("board12").value=window.localStorage.getItem("board12")
document.getElementById("branch12").value=window.localStorage.getItem("branch12")
document.getElementById("aggregate12").value=window.localStorage.getItem("aggregate12")
document.getElementById("passingyear12").value=window.localStorage.getItem("passingyear12")

document.getElementById("school12").readOnly=false;  
document.getElementById("board12").readOnly=false;
document.getElementById("branch12").readOnly=false;
document.getElementById("aggregate12").readOnly=false;
document.getElementById("passingyear12").readOnly=false;


}

function editHighSchool()
{

    document.getElementById("school10").value=window.localStorage.getItem("school10")
    document.getElementById("board10").value=window.localStorage.getItem("board10")
    document.getElementById("branch10").value=window.localStorage.getItem("branch10")
    document.getElementById("aggregate10").value=window.localStorage.getItem("aggregate10")
    document.getElementById("passingyear10").value=window.localStorage.getItem("passingyear10")

    document.getElementById("school10").readOnly=false;  
    document.getElementById("board10").readOnly=false;
    document.getElementById("branch10").readOnly=false;
    document.getElementById("aggregate10").readOnly=false;
    document.getElementById("passingyear10").readOnly=false;
}
var skillcount=0;
function addInput()
{
    skillcount=skillcount+1;
    if(skillcount>10)
    {
        window.alert("Sorry This is the Limit, dont do too show off !!!\n Hadd Hoti Hai bhaee");
        return;
    }
    console.log("into input");
    document.getElementById('skillset').insertAdjacentHTML("beforeend","<p class='con-align'><label class='labelst' for='textarea'>SkillType:&nbsp</label><textarea class='boxstyle' type='text' id='type"+skillcount+"' placeholder='Write the type of skill you wish....' rows=1></textarea>"+"&nbsp &nbsp <label for='textarea'>SkillSet:&nbsp</label><textarea class='boxstyle' type='text' rows=1 placeholder='Type Your Skills here...' id='skill"+skillcount+"'></textarea></p>");
    //type_skillcount key store type_name_skillcount
    //skill_skillcount key store value of skill_name_skillcount
}

function saveSkills()
{
    
    for(let i=1;i<=10;i++)
    {
        if(document.getElementById('type'+i)===null||document.getElementById('type'+i).value==="")
        {
            console.log("thats it...!! End");
            return;
        }
        window.localStorage.setItem("type"+i,document.getElementById('type'+i).value);
        window.localStorage.setItem("skill"+i,document.getElementById('skill'+i).value);
        document.getElementById('type'+i).readOnly=true;
        document.getElementById('skill'+i).readOnly=true;
    }
}

function fetchSkills()
{
    
    for(let i=1;i<=10;i++)
    {
        skillcount=skillcount+1;
        if(window.localStorage.getItem("skill"+i)===null||window.localStorage.getItem("skill"+i)==="")
        {
            console.log("thats it...!! End");
            skillcount=skillcount-1;
            return;
        }
        document.getElementById('skillset').insertAdjacentHTML("beforeend","<p class='con-align'><label class='labelst' for='textarea'>SkillType:&nbsp</label><textarea type='text' class='boxstyle' id='type"+skillcount+"' placeholder='Write the type of skill you wish....' rows=1>"+window.localStorage.getItem("type"+i)+"</textarea>"+"&nbsp &nbsp <label for='textarea'>SkillSet:&nbsp</label><textarea class='boxstyle' type='text' rows=1 placeholder='Type Your Skills here...' id='skill"+skillcount+"'>"+window.localStorage.getItem("skill"+i)+"</textarea></p>");
        
        document.getElementById('type'+i).readOnly=false;
        document.getElementById('skill'+i).readOnly=false;
    }
}

function editSkills()
{
    for(let i=1;i<=10;i++)
    {
        if(window.localStorage.getItem("skill"+i)===null||window.localStorage.getItem("skill"+i)==="")
        {
            console.log("thats it...!! End");
            return;
        }
        
        document.getElementById('type'+i).readOnly=false;
        document.getElementById('skill'+i).readOnly=false;
    }
}

var expcount=0;
function addExp()
{
    expcount=expcount+1;
    if(expcount>10)
    {
        window.alert("Sorry This is the Limit, dont do too show off !!!\n Hadd Hoti Hai bhaee");
        return;
    }
    console.log("into input exp");
    document.getElementById('expset').insertAdjacentHTML("beforeend","<p class='con-align'><label class='labelst' for='textarea'>ExperienceType:&nbsp</label><textarea class='boxstyle' type='text' id='exptype"+expcount+"' placeholder='Write the type of Experience You Had....' rows=1></textarea>"+"&nbsp &nbsp <label for='textarea'>Experience Summary:&nbsp</label><textarea class='boxstyle' type='text' rows=5 placeholder='Describe about your Experience here...' id='exp"+expcount+"'></textarea></p>");
    //type_skillcount key store type_name_skillcount
    //skill_skillcount key store value of skill_name_skillcount
}

function saveExp()
{
    
    for(let i=1;i<=10;i++)
    {
        if(document.getElementById('exptype'+i)===null||document.getElementById('exptype'+i).value==="")
        {
            console.log("thats it...!! End");
            return;
        }
        window.localStorage.setItem("exptype"+i,document.getElementById('exptype'+i).value);
        window.localStorage.setItem("exp"+i,document.getElementById('exp'+i).value);
        document.getElementById('exptype'+i).readOnly=true;
        document.getElementById('exp'+i).readOnly=true;
    }
}

function fetchExp()
{
    
    for(let i=1;i<=10;i++)
    {
        expcount=expcount+1;
        if(window.localStorage.getItem("exp"+i)===null||window.localStorage.getItem("exp"+i)==="")
        {
            console.log("thats it...!! End");
            expcount=expcount-1;
            return;
        }
        document.getElementById('expset').insertAdjacentHTML("beforeend","<p class='con-align'><label class='labelst' for='textarea'>Experience Type:&nbsp</label><textarea type='text' class='boxstyle' id='exptype"+expcount+"' placeholder='Write the type of Experience You had....' rows=1>"+window.localStorage.getItem("exptype"+i)+"</textarea>    "+"<label for='textarea'>Experience Summary:&nbsp</label><textarea class='boxstyle' type='text' rows=1 placeholder='Type Your Skills here...' id='exp"+expcount+"'>"+window.localStorage.getItem("exp"+i)+"</textarea></p>");
        
        document.getElementById('exptype'+i).readOnly=false;
        document.getElementById('exp'+i).readOnly=false;
    }
}

function editExp()
{
    for(let i=1;i<=10;i++)
    {
        if(window.localStorage.getItem("exp"+i)===null||window.localStorage.getItem("exp"+i)==="")
        {
            console.log("thats it...!! End");
            return;
        }
        
        document.getElementById('exptype'+i).readOnly=false;
        document.getElementById('exp'+i).readOnly=false;
    }
}