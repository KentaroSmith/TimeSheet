var config = {
    apiKey: "AIzaSyDHPcoB1JoazNhjQnG3_mXazkcv0YPkezk",
    authDomain: "first-test-768f4.firebaseapp.com",
    databaseURL: "https://first-test-768f4.firebaseio.com",
    projectId: "first-test-768f4",
    storageBucket: "",
    messagingSenderId: "13834221587",
    appId: "1:13834221587:web:c146b4bf56a0d6ad"
};

firebase.initializeApp(config);
//Here's a list of our ID names in the HTML
//"#employee-name"
//"#role"
//"#start-date"
//"#monthly-rate"
//"#submit-form"  - name of the submit button
var database = firebase.database();

var name = "";
var role = "";
var startDate = "";
var monthsWorked = 0;
var monthlyRate = 0;
var totalBilled = 0;

$("#submit-form").on("click", function (event) {
    //var input=0;
    //input++;
    event.preventDefault();
    alert("button works");
    name = $("#employee-name").val().trim();
    role = $("#role").val().trim();
    startDate = $("#start-date").val().trim();
    monthlyRate = parseFloat($("#monthly-rate").val().trim());
    //totalBilled = $("#total-billed").val().trim();
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        //totalBilled: totalBilled
    });

})
database.ref().on("child_added", function (snapshot) {
    var sv = snapshot.val();
    console.log(snapshot);
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.startDate);
    console.log(sv.monthlyRate);
    //console.log(sv.totalBilled);

    //$("#employee-name").text(sv.name);
    //$("#role").text(sv.role);
    //$("#start-date").text(sv.startDate);
    //$("#monthlyRate").text(sv.monthlyRate);
    //$("#totalBilled").text(sv.totalBilled);




}, function (errorObject) {
    console.log('Errors Handled: ' + errorObject.code);
});
//firebase info path "role" = i.node_.children_.root_.value.value_
//"name" = i.node_.children_.root_.left.value.value_
//