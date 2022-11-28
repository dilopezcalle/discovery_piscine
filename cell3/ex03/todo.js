let elementsUL = []

if (detectCookie('tarea0'))
{
	let i = 0;
	while (detectCookie('tarea' + i))
	{
		elementsUL.push(getCookie('tarea' + i));
		i++;
	}
}
let ul = createUL(elementsUL);

function createUL(elements) {
	let ul = document.getElementById('ft_list');
	if (elements && Array.isArray(elements))
	{
		for (let index = elements.length - 1; index >= 0; index--)
		{
			const element = elements[index];
			let div = document.createElement("div");
			div.classList.add('elemento');
			div.setAttribute('id', 'div' + index);
			let liText = document.createTextNode(element);
			div.appendChild(liText);
			ul.appendChild(div);
		}
	}
	return ul;
}

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('btn').addEventListener('click', add_element, false);
	let div
	for (let index = 0; index < elementsUL.length ; index++)
	{
		div = document.getElementById('div' + index);
		div.addEventListener('click', delete_element, false);
		div.myParam = index;
	}
});

function add_element()
{
	var i = 0;
	alert('entra');
	if (!detectCookie('tarea0'))
	{
		alert('no existe');
	}
	else
	{
		while (detectCookie('tarea' + i))
			i++;
	}
}

function detectCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0 && (name.length != c.length))  {
			return true;
		}
	}
	return false;
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function removeCookie(cname)
{
	setCookie(cname,"",-1);
}

function delete_element(evt)
{
	alert('entra');
	removeCookie('tarea' + evt.currentTarget.myParam);
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();

	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();

	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}