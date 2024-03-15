let a = [2,3,4];
function storeData(){
    let convert=JSON.stringify(a)
    sessionStorage.setItem("details",convert)
}

function getData(){
    let Data=sessionStorage.getItem('details')
    let arrayData=JSON.parse(Data)
        console.log(arrayData)
    // alert(localData)
    // alert(typeof(localData))


}