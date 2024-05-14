getResponse();

async function getResponse() {
	const response = await fetch(
		'http://dummy.restapiexample.com/api/v1/employees',
		{
			method: 'GET',
		}
	);
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();


    console.log(data);

    if (data.data.length > 0) {

        var temp = "";
        data.data.forEach((itemData) => {
          temp += "<tr>";
          temp += "<td>" + itemData.id + "</td>";
          temp += "<td>" + itemData.employee_name + "</td>"
          temp += "<td>" + itemData.employee_salary + "</td>"
          temp += "<td>" + itemData.employee_age + "</td></tr>";
        });
        document.getElementById('data').innerHTML = temp;
      }
}