document.getElementById("tax_form").addEventListener("submit", function (event) {
    event.preventDefault()

    let basic_salary = Number(document.getElementById("basic").value)
    let benefits = Number(document.getElementById("benefits").value)


    // GROSS SALARY
    function calculate_gross(basic, benefits) {
        return basic + benefits
    }

    let gross_salary = calculate_gross(basic_salary, benefits)

    document.getElementById("gross").innerHTML = gross_salary


    // NHIF
    function calculate_nhif(gross) {
        let nhif

        if (gross > 0 && gross <= 5999) {
            nhif = 150
        } else if (gross <= 7999) {
            nhif = 300
        } else if (gross <= 11999) {
            nhif = 400
        } else if (gross <= 14999) {
            nhif = 500
        } else if (gross <= 19999) {
            nhif = 600
        } else if (gross <= 24999) {
            nhif = 750
        } else if (gross <= 29999) {
            nhif = 850
        } else if (gross <= 34999) {
            nhif = 900
        } else if (gross <= 39999) {
            nhif = 950
        } else if (gross <= 44999) {
            nhif = 1000
        } else if (gross <= 49999) {
            nhif = 1100
        } else if (gross <= 59999) {
            nhif = 1200
        } else if (gross <= 69999) {
            nhif = 1300
        } else if (gross <= 79999) {
            nhif = 1400
        } else if (gross <= 89999) {
            nhif = 1500
        } else if (gross <= 99999) {
            nhif = 1600
        } else {
            nhif = 1700
        }

        return nhif
    }

    let nhif = calculate_nhif(gross_salary)

    document.getElementById("nhif").innerHTML = nhif


    // NHDF
    function calculate_nhdf(gross) {
        return gross * 0.015
    }

    let nhdf = calculate_nhdf(gross_salary)

    document.getElementById("nhdf").innerHTML = nhdf


    // NSSF
    function calculate_nssf(gross) {

        if (gross < 18000) {
            return 0
        } else {
            return 18000 * 0.06
        }
    }

    let nssf = calculate_nssf(gross_salary)

    document.getElementById("nssf").innerHTML = nssf


    // TAXABLE INCOME
    function calculate_taxable_income(gross, nssf, nhif, nhdf) {
        return gross - (nssf + nhif + nhdf)
    }

    let taxable_income =
        calculate_taxable_income(gross_salary, nssf, nhif, nhdf)

    document.getElementById("taxable").innerHTML = taxable_income


    // PAYE
    function calculate_payee(taxable_income) {

        let tax

        if (taxable_income <= 24000) {

            tax = taxable_income * 0.10

        } else if (taxable_income <= 32333) {

            tax =
                (24000 * 0.10) +
                ((taxable_income - 24000) * 0.25)

        } else if (taxable_income <= 500000) {

            tax =
                (24000 * 0.10) +
                (8333 * 0.25) +
                ((taxable_income - 32333) * 0.30)

        } else if (taxable_income <= 800000) {

            tax =
                (24000 * 0.10) +
                (8333 * 0.25) +
                (467667 * 0.30) +
                ((taxable_income - 500000) * 0.325)

        } else {

            tax =
                (24000 * 0.10) +
                (8333 * 0.25) +
                (467667 * 0.30) +
                (300000 * 0.325) +
                ((taxable_income - 800000) * 0.35)
        }


        // Personal relief
        tax = tax - 2400


        // Prevent negative PAYE
        if (tax < 0) {
            tax = 0
        }

        return tax
    }

    let payee = calculate_payee(taxable_income)

    document.getElementById("payee").innerHTML = payee


    // NET SALARY
    function calculate_net_salary(gross, nhif, nssf, nhdf, payee) {

        return gross - (nhif + nssf + nhdf + payee)
    }

    let net_salary =
        calculate_net_salary(
            gross_salary,
            nhif,
            nssf,
            nhdf,
            payee
        )

    document.getElementById("net").innerHTML = net_salary

})
    