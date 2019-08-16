let main = document.querySelector("main");
let apps = [
    {
        "name" : "Launcher",
        "url" : "fmp://fms14.dl.scbt.com/FMCruzControl"
    },{
        "name" : "Technology Service Tickets",
        "url" : "fmp://fms14.dl.scbt.com/TechnologyServiceTickets"
    },{
        "name" : "Livestock",
        "url" : "fmp://fms7.dl.scbt.com/Livestock"
    },{
        "name" : "Some other app",
        "url" : "fmp://fms14.dl.scbt.com/CoreDataWorker"
    },{
        "name" : "Some other app",
        "url" : "fmp://fms14.dl.scbt.com/CoreDataWorker"
    },{
        "name" : "Some other app",
        "url" : "fmp://fms14.dl.scbt.com/CoreDataWorker"
    },{
        "name" : "Some other app",
        "url" : "fmp://fms14.dl.scbt.com/CoreDataWorker"
    },{
        "name" : "Some other app",
        "url" : "fmp://fms14.dl.scbt.com/CoreDataWorker"
    },{
        "name" : "Some other app",
        "url" : "fmp://fms14.dl.scbt.com/CoreDataWorker"
    },{
        "name" : "Some other app",
        "url" : "fmp://fms14.dl.scbt.com/CoreDataWorker"
    },{
        "name" : "Some other app",
        "url" : "fmp://fms14.dl.scbt.com/CoreDataWorker"
    }
];

let appList = document.createElement('ul');
appList.setAttribute("id", "appList");

apps.forEach(app=>{
    
    let a = document.createElement('a');
    a.setAttribute("href",app.url);
    a.innerHTML = app.name;

    let li = document.createElement('li');
    li.append(a);
    li.addEventListener('click',(e)=>{
        e.preventDefault();
        window.location = app.url;
    });
    appList.append(li);
});

main.append(appList);