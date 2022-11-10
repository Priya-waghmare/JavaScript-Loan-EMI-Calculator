function loan()
{
    x=Number(document.getElementById('amount').value)
    y=Number(document.getElementById('interest').value)
    z=Number(document.getElementById('duration').value)

    int = (x*(y*0.01))/z
    res= ((x/z)+int).toFixed(2)
    amt= (x+(int*z))
    tot_int= (`${amt}`-`${x}`).toFixed(2)

    document.getElementById('emi_val').innerHTML=`Monthly Loan EMI:  &#8377;${res}`
    document.getElementById('print').innerHTML= `Interest Amount:  &#8377;${tot_int}`
    document.getElementById('tot_amt').innerHTML=`Total Amount Payable:  &#8377;${amt}`
    

}