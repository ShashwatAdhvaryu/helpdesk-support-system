

var ticketsArray = [];

function newTicket(){
    // resetNewTicketDiv();
    let outerDiv= document.getElementById("outerDiv");
    outerDiv.className='container';
    let div = document.createElement('div');
    div.className = 'jumbotron';
    div.style ="background-color:#f5f3ef";
    let form = document.createElement('form');
    form.id ='newTicketForm';
    form.innerHTML ='<h1>ADD NEW TICKET</h1>';
    form.scrollIntoView();
    let divTitle = document.createElement('div');
    divTitle.className='form-group';
    let labelTitle = document.createElement('label');
    labelTitle.className = 'form-group';
    labelTitle.innerHTML = 'Title';
    labelTitle.for = 'ticketName';
    let title = document.createElement("input");
    title.type= 'text';
    title.className ='form-control';
    title.id ='ticketName';

    divTitle.appendChild(labelTitle);
    divTitle.appendChild(title);

    let divEmail = document.createElement('div');
    divEmail.className='form-group';
    let labelEmail = document.createElement('label');
    labelEmail.className = 'form-group';
    labelEmail.innerHTML = 'Email';
    labelEmail.for = 'ticketEmail';
    labelEmail.innerHTML = 'Email';
    let email= document.createElement("input");
    email.type= 'email';
    email.className ='form-control';
    email.id = 'ticketEmail';

    divEmail.appendChild(labelEmail);
    divEmail.appendChild(email);


    let divDepartment = document.createElement('div');
    divDepartment.className='form-group';
    let labelDepartment = document.createElement('label');
    labelDepartment.innerHTML = 'Department';
    labelDepartment.for = 'choseDpt';
    let select = document.createElement('select');
    select.id ='choseDpt';
    select.className = 'form-control';
    let option = document.createElement('option');
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');
    let option4 = document.createElement('option');
    option.value ='Sales';
    option1.value = 'Accounting';
    option3.value = 'External Client';
    option4.value = 'Admin';
    option2.value = 'Treasury';
    option.innerHTML = 'Sales';
    option1.innerHTML = 'Accounting';
    option3.innerHTML = 'External Client';
    option4.innerHTML = 'Admin';
    option2.innerHTML = 'Treasury';
    divDepartment.appendChild(labelDepartment);
    divDepartment.appendChild(select);
    select.appendChild(option);
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);


    let divPriority = document.createElement('div');
    divPriority.className='form-group';
    let labelPriority = document.createElement('label');
    labelPriority.innerHTML = 'Priority';
    labelPriority.for = 'chosePriority';
    let selectPriority = document.createElement('select');
    selectPriority.className = 'form-control';
    selectPriority.id ='chosePriority';
    let optionPriority = document.createElement('option');
    let optionPriority1 = document.createElement('option');
    let optionPriority2 = document.createElement('option');
    let optionPriority3 = document.createElement('option');
    let optionPriority4 = document.createElement('option');
    optionPriority.value = 'Low';
    optionPriority.innerHTML = 'Low';
    optionPriority1.value = 'Medium';
    optionPriority1.innerHTML = 'Medium';
    optionPriority2.value = 'High';
    optionPriority2.innerHTML = 'High';
    optionPriority3.value = 'Critical';
    optionPriority3.innerHTML = 'Critical';
    optionPriority4.value = 'Emergency';
    optionPriority4.innerHTML = 'Emergency';
    divPriority.appendChild(labelPriority);
    divPriority.appendChild(selectPriority);
    selectPriority.appendChild(optionPriority);
    selectPriority.appendChild(optionPriority1);
    selectPriority.appendChild(optionPriority2);
    selectPriority.appendChild(optionPriority3);
    selectPriority.appendChild(optionPriority4);

    let divMessage = document.createElement('div');
    divMessage.className = 'form-group';
    let labelMessage = document.createElement('label');
    labelMessage.className ='col-sm-2 control-label';
    labelMessage.innerHTML ='Problem';
    labelMessage.for = 'inputText';
    let messageText = document.createElement('textarea');
    messageText.className = 'form-control';
    messageText.id = 'inputText';
    messageText.rows = '3';
    messageText.placeholder ='Problem details';
    divMessage.appendChild(labelMessage);
    divMessage.appendChild(messageText);

    let divPhoneContact = document.createElement('div');
    divPhoneContact.className='form-group';
    let labelPhone = document.createElement('label');
    labelPhone.className = 'form-group';
    labelPhone.innerHTML = 'Contact Phone';
    labelPhone.for = 'ticketContact';
    let contactInput = document.createElement("input");
    contactInput.type= 'text';
    contactInput.className ='form-control';
    contactInput.id = 'ticketContact';
    divPhoneContact.appendChild(labelPhone);
    divPhoneContact.appendChild(contactInput);

    let divCustomer = document.createElement('div');
    divCustomer.className ='form-group';
    let labelCustomer = document.createElement('label');
    labelCustomer.className = 'form-group';
    labelCustomer.innerHTML ='Customer Name';
    labelCustomer.for = 'customerName';
    let customerName = document.createElement("input");
    customerName.type= 'text';
    customerName.className = 'form-control';
    customerName.id = 'customerName';
    divCustomer.appendChild(labelCustomer);
    divCustomer.appendChild(customerName);

    let divStatus = document.createElement('div');
    divStatus.id = 'status';

    let divSubmit = document.createElement('div');
    divSubmit.type = 'button';
    divSubmit.className ='submit-btn';
    divSubmit.innerHTML='Submit';
    divSubmit.addEventListener("click",ticketSubmit);

    outerDiv.appendChild(div);
    div.appendChild(form);
    form.appendChild(divTitle);
    form.appendChild(divEmail);
    form.appendChild(divDepartment);
    form.appendChild(divPriority);
    form.appendChild(divMessage);
    form.appendChild(divPhoneContact);
    form.appendChild(divCustomer);
    form.appendChild(divSubmit);
    form.appendChild(divStatus);
    document.body.appendChild(outerDiv);
}


function ticketSubmit(){

    let ticketNumber = generateTicketNumber();
    let ticketTitle = document.getElementById("ticketName").value;
    let ticketEmail = document.getElementById("ticketEmail").value;
    let ticketDepartment = document.getElementById("choseDpt").value;
    let ticketPriority = document.getElementById("chosePriority").value;
    let ticketProblemDetails = document.getElementById("inputText").value;
    let ticketPhoneNo = document.getElementById("ticketContact").value;
    let ticketCustomerName = document.getElementById("customerName").value;

    let ticketDetails ={

        ticketNumber:ticketNumber,
        title : ticketTitle,
        email :ticketEmail,
        department :ticketDepartment,
        priority :ticketPriority,
        details :ticketProblemDetails,
        phone : ticketPhoneNo,
        customerName :ticketCustomerName
    };

    //ticketsArray.push(ticketDetails);
       ref.push(ticketDetails);

    //localStorage.ticketRecord = JSON.stringify(ticketsArray);

    ticketSummary(ticketNumber,ticketTitle,ticketDepartment,ticketPriority,ticketCustomerName);
    let newOuterDiv = document.getElementById("outerDiv");
    newOuterDiv.style.color = "red";
    newOuterDiv.innerHTML = "<h1>Submitted!!</h1>"


    //document.getElementById('newTicketForm').reset();
}

function resetNewTicketDiv(){
    let newOuterDiv = document.getElementById("outerDiv");
    newOuterDiv.style.color = "";
    newOuterDiv.innerHTML = "";
}

