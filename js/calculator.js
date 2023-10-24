

function simpleInterest() {
    Sprincipal = parseInt(document.getElementById("Sprincipal").value);
    Srate = parseInt(document.getElementById("Srate").value);
    Stime = parseInt(document.getElementById("Stime").value);

    // Calculate simple interest using the formula I = P * R * T
    let interest = (Sprincipal * Srate * Stime) / 100;

    // Return the calculated interest
    document.getElementById("Sresult").value = "Final amount is " + (interest + Sprincipal);
    document.getElementById("givenSInterest").innerHTML = interest;
}

function compoundInterest() {
    Cprincipal = parseInt(document.getElementById("Cprincipal").value);
    Crate = parseInt(document.getElementById("Crate").value);
    Ctime = parseInt(document.getElementById("Ctime").value);

    // Calculate compound interest using the formula A = P * (1 + R/100) ^ T
    let interest = Cprincipal * (Math.pow((1 + Crate / 100), Ctime));
    interest = interest.toFixed(2);

    // Return the calculated interest
    document.getElementById("Cresult").value = "Final amount is " + interest;
    document.getElementById("givenCInterest").innerHTML = interest;
}