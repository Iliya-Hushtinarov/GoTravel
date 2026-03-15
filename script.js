function Open(btn) {
    if (btn === 'navBtn') {
        var nav = document.getElementById('main-nav');
        nav.classList.toggle('active');
    }else if(btn === 'filterBtn'){
        var filter = document.getElementById('offers-filter');
        filter.classList.toggle('active');

        var overlay = document.getElementById('offers-overlay');
        overlay.classList.toggle('active');

        var btn = document.getElementById('switch-filter-btn');
        btn.classList.toggle('active');
    }
}
function Close(){
    var filter = document.getElementById('offers-filter');
    filter.classList.remove('active');

    var overlay = document.getElementById('offers-overlay');
    overlay.classList.remove('active');

    var btn = document.getElementById('switch-filter-btn');
    btn.classList.remove('active');
}

function Validate(form){

    var condition = true;

    const required = "Required field!";

    const emailPattern = /^[^\s@№%$&^!~#\/\\|\?]+@[^\s%@№$&^!~#\/\\|\?]+\.[^\s%@№$&^!~#\/\\|\?\.]{2,}$/;
    const forbiddenChars = /[\s%№$&^!~#\/\\|\?]/;
    const specialChars =  /[@%$&^!~#\/\\|\?\.\=\+\_()-]/

    if (form === 'signIn') {
        var name = document.getElementById('name').value;
        var surname = document.getElementById('surname').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var repPassword = document.getElementById('rep-password').value;
        
        if (name=="") {
            condition = false;
            document.getElementById('name-error').innerHTML = required;
        } else if(name.length<2){
            condition = false;
            document.getElementById('name-error').innerHTML = "Name must contain at least 2 characters!";
        }else{
            document.getElementById('name-error').innerHTML = "";
        }

         if (surname=="") {
            condition = false;
            document.getElementById('surname-error').innerHTML = required;
        } else if(surname.length<2){
            condition = false;
            document.getElementById('surname-error').innerHTML = "Surname must contain at least 2 characters!";
        }else{
            document.getElementById('surname-error').innerHTML = "";
        }

         if (phone=="") {
            condition = false;
            document.getElementById('phone-error').innerHTML = required;
        } else if (phone.length<7 || phone.length>15) {
            condition = false;
            document.getElementById('phone-error').innerHTML = "Invalid length!";
        } else if(phone[0] != '+' && !phone[0].match(/[0-9]/)){
            condition = false;
            document.getElementById('phone-error').innerHTML = "Invalid character!";
        } else{
            for(var i = 1; i < phone.length; i++) {
                if (!phone[i].match(/[0-9]/) ) {
                    condition = false;
                    document.getElementById('phone-error').innerHTML = "Invalid character!";
                    break;
                }else{
                    document.getElementById('phone-error').innerHTML = "";
                }
            }
        }

       
        if (email == "") {
            condition = false;
            document.getElementById('email-error').innerHTML = required;
        }else if (email.length < 6) {
            condition = false;
            document.getElementById('email-error').innerHTML = "Email must contain at least 6 characters!";
        }else if (!email.includes("@")) {
            condition = false;
            document.getElementById('email-error').innerHTML = "Email must contain '@'!";
        }else if (!email.includes(".")) {
            condition = false;
            document.getElementById('email-error').innerHTML = "Email must contain '.'!";
        }else if (forbiddenChars.test(email)) {
            condition = false;
            document.getElementById('email-error').innerHTML = "Email cannot contain special characters!";
        }else if (!emailPattern.test(email)){
            condition = false;
            document.getElementById('email-error').innerHTML = "Email format is incorrect!";
        }else{
            document.getElementById('email-error').innerHTML = "";
        }

        
        if (password =="") {
            condition = false;
            document.getElementById('password-error').innerHTML = required;
        }else if (password.length<8) {
            condition = false;
            document.getElementById('password-error').innerHTML = "Password must contain at least 8 characters!";
        }else if (!password.match(/[a-z]/)) {
            condition = false;
            document.getElementById('password-error').innerHTML = "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character!";
        }else if (!password.match(/[A-Z]/)) {
            condition = false;
            document.getElementById('password-error').innerHTML = "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character!";
        }else if (!password.match(/[0-9]/)) {
            condition = false;
            document.getElementById('password-error').innerHTML = "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character!";
        }else if (!specialChars.test(password)) {
            condition = false;
            document.getElementById('password-error').innerHTML = "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character!";
        }else{
            document.getElementById('password-error').innerHTML = "";
        }

        if (repPassword == "") { 
            condition = false;
            document.getElementById('rep-password-error').innerHTML = required;
        }else if (repPassword != password) {
            condition = false;
            document.getElementById('rep-password-error').innerHTML = "Passwords do not match!";
        }else{
            document.getElementById('rep-password-error').innerHTML = "";
        }

        if (condition == true) {
            alert("Registration successful!");
        }
        return condition;
    }

    if (form === 'logIn'){
        var emailLog = document.getElementById('email-log').value;
        var passwordLog = document.getElementById('password-log').value;

         if (emailLog == "") {
            condition = false;
            document.getElementById('email-error-log').innerHTML = required;
        }else if (emailLog.length < 6) {
            condition = false;
            document.getElementById('email-error-log').innerHTML = "Email must contain at least 6 characters!";
        }else if (!emailLog.includes("@")) {
            condition = false;
            document.getElementById('email-error-log').innerHTML = "Email must contain '@'!";
        }else if (!emailLog.includes(".")) {
            condition = false;
            document.getElementById('email-error-log').innerHTML = "Email must contain '.'!";
        }else if (forbiddenChars.test(emailLog)) {
            condition = false;
            document.getElementById('email-error-log').innerHTML = "Email cannot contain special characters!";
        }else if (!emailPattern.test(emailLog)){
            condition = false;
            document.getElementById('email-error-log').innerHTML = "Email format is incorrect!";
        }else{
            document.getElementById('email-error-log').innerHTML = "";
        }

        if (passwordLog =="") {
            condition = false;
            document.getElementById('password-error-log').innerHTML = required;
        }else if (passwordLog.length<8) {
            condition = false;
            document.getElementById('password-error-log').innerHTML = "Password must contain at least 8 characters!";
        }else if (!passwordLog.match(/[a-z]/)) {
            condition = false;
            document.getElementById('password-error-log').innerHTML = "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character!";
        }else if (!passwordLog.match(/[A-Z]/)) {
            condition = false;
            document.getElementById('password-error-log').innerHTML = "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character!";
        }else if (!passwordLog.match(/[0-9]/)) {
            condition = false;
            document.getElementById('password-error-log').innerHTML = "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character!";
        }else if (!specialChars.test(passwordLog)) {
            condition = false;
            document.getElementById('password-error-log').innerHTML = "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character!";
        }else{
            document.getElementById('password-error-log').innerHTML = "";
        }
        if (condition == true) {
            alert("You have successfully logged into your account!");
        }
        return condition;
    }

    if (form === 'reservation'){
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var dateStr = document.getElementById('date').value;
        var date = new Date(dateStr);
        var adults = Number(document.getElementById('adults').value);
        var children = Number(document.getElementById('children').value);
        var price = Number(document.getElementById('price').value)

        var today = new Date();


        var nameError = document.getElementById('name-errors');
        var emailError = document.getElementById('email-errors');
        var phoneError = document.getElementById('phone-errors');
        var dateError = document.getElementById('date-errors');
        var adultsError = document.getElementById('adults-errors');
        var childrenError = document.getElementById('children-errors');

        if (name == "") {
            condition = false;
            nameError.innerHTML = required;
        }else if(name.length < 5){
            condition = false
            nameError.innerHTML = "Enter at least 5 characters!"
        }else if(!name.includes(" ")){
            condition = false
            nameError.innerHTML = "Enter first and last name (space missing)!"
        }else{
            nameError.innerHTML = "";
        }

        if (email == "") {
            condition = false;
            emailError.innerHTML = required;
        }else if (email.length < 6) {
            condition = false;
            emailError.innerHTML = "Email must contain at least 6 characters!";
        }else if (!email.includes("@")) {
            condition = false;
            emailError.innerHTML = "Email must contain '@'!";
        }else if (!email.includes(".")) {
            condition = false;
            emailError.innerHTML = "Email must contain '.'!";
        }else if (forbiddenChars.test(email)) {
            condition = false;
            emailError.innerHTML = "Email cannot contain special characters!";
        }else if (!emailPattern.test(email)){
            condition = false;
            emailError.innerHTML = "Email format is incorrect!";
        }else{
            emailError.innerHTML = "";
        }

        if (phone=="") {
            condition = false;
            phoneError.innerHTML = required;
        } else if (phone.length<7 || phone.length>15) {
            condition = false;
            phoneError.innerHTML = "Invalid length!";
        } else if(phone[0] != '+' && !phone[0].match(/[0-9]/)){
            condition = false;
            phoneError.innerHTML = "Invalid character!";
        } else{
            for(var i = 1; i < phone.length; i++) {
                if (!phone[i].match(/[0-9]/) ) {
                    condition = false;
                    phoneError.innerHTML = "Invalid character!";
                    break;
                }else{
                    phoneError.innerHTML = "";
                }
            }
        }

        if (dateStr == "") {
            condition = false;
            dateError.innerHTML = required;
        }else if(date <= today){
             condition = false;
             dateError.innerHTML = "The date must be in the future!";
         }else{
             dateError.innerHTML="";
         }

         if (adults < 1) {
             condition = false;
             adultsError.innerHTML="There must be at least one adult!";
         }else{
            adultsError.innerHTML="";
         }


         if (children < 0) {
             condition = false;
             childrenError.innerHTML = "Cannot contain negative values!";
         }else{
            childrenError.innerHTML = "";
         }

         if (condition == true) {
            document.getElementById("successful").innerHTML = "Reservation successful!"
         }else{
            document.getElementById("successful").innerHTML = ""
         }

        return false;
    }
}

function CalculatePrice(startPrice){
    const price = startPrice;
    var adults = Number(document.getElementById("adults").value);
    var children = Number(document.getElementById("children").value);

    var result = price;
    if (adults > 1) {
        result += (adults-1)*100
    }
    if (children > 0) {
        result += children * 50;
    }
    document.getElementById("price").innerHTML = result;
}

function Equalize(type){
var priceNumber = document.getElementById('price-number');
var priceRange = document.getElementById('price-range');
    if (type === 'range') {
        priceNumber.value = priceRange.value;
    }else if(type === 'number'){
        priceRange.value = priceNumber.value;
    }
}


function Filter() {
    var cards = document.getElementsByClassName('card');

    var filterCountry = document.getElementById('country').value;
    var types = document.getElementsByName('trip-type');
    var transport = document.getElementsByName('transport');
    var maxPrice = document.getElementById('price-number').value;

    for (var i = 0; i < cards.length; i++){
        var showCard = true;

        if (filterCountry != '') {
            if (cards[i].dataset.country != filterCountry) {
                showCard = false;
            }
        }
        
        var selected = false;
        for (var j = 0; j < types.length; j++) {
            if (types[j].checked) {
                selected = true;
                if (cards[i].dataset.type == types[j].value) {
                  selected = false;
                  break;  
                }
            }
        }
        if (selected == true) {
            showCard = false;
        }

        for (var j = 0; j < transport.length; j++) {
            if (transport[j].checked && transport[j].value!= 'all-transport') {
                if (cards[i].dataset.transport != transport[j].value) {
                    showCard = false;
                }
                break;
            }
        }

        if (maxPrice != ''){
            if (Number(cards[i].dataset.price) > Number(maxPrice)) {
                showCard = false;
            }
        }
        

        if (showCard) {
            cards[i].classList.remove('hidden');
        } else {
            cards[i].classList.add('hidden');
        }

    }

     var filter = document.getElementById('offers-filter');
    filter.classList.remove('active');

    var overlay = document.getElementById('offers-overlay');
    overlay.classList.remove('active');

    var btn = document.getElementById('switch-filter-btn');
    btn.classList.remove('active');

    return false;

}

function clearFilter(){
     var cards = document.getElementsByClassName('card');
      for (var i = 0; i < cards.length; i++){
        cards[i].classList.remove('hidden');
      }
    var filter = document.getElementById('offers-filter');
    filter.classList.remove('active');

    var overlay = document.getElementById('offers-overlay');
    overlay.classList.remove('active');

    var btn = document.getElementById('switch-filter-btn');
    btn.classList.remove('active');
}

