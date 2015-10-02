 var a=Array(), r=g=b=p=0, prev;
  var rounds=parseInt(prompt('Введите число раундов'));
  
  for (var i=0; i<rounds; ++i)
   a.push(Math.round(Math.sin(Math.random()*2*Math.PI)));
  
  alert(a);
  
  
  prev=a[0];
  for(i=1; i<a.length; ++i)  
   {
   if (a[i]==prev) ++p;
   else
	{
	 switch (prev)
      {
       case -1: 
	    if (p>r) r=p;
	    break;
	   case 0: 
	    if (p>g) g=p;
	    break;
	   case 1:
		if (p>b) b=p;
	    break;
	  }
	 p=0;
	 prev=a[i];
    }
   console.log(i,prev,p,r,g,b);
  }
  
  
  if (r==0 && g==0 && b==0)
   alert('Ни один из цветов ни разу не повторялся'+r+g+b);
  else if (r==g && g==b)
   alert('Все цвета повторялись одинаковое количество раз: '+r+' раз(а)');
  else if (r>=g && r>=b)
   {
	if (r==g)
     alert('Больше всего повторялись красный и зеленый цвета: '+r+' раз(а)');
	else if (r==b)
	 alert('Больше всего повторялись красный и черный цвета: '+r+' раз(а)');
	else
	 alert('Больше всего повторялся красный цвет: '+r+' раз(а)');
   }
  else if (g>r && g>=b)
   {
    if(g==b)
	 alert('Больше всего повторялись зеленый и черный цвета: '+g+' раз(а)');
	else
	 alert('Больше всего повторялся зеленый цвет: '+g+' раз(а)');
   }
  else
   alert('Больше всего повторялся черный цвет: '+b+' раз(а)');