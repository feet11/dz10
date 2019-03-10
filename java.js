function function(a) {
	var a;
	switch (typeof(a)){
		case "number": 
			if (a === null)
			{
				console.log (4);
			} else 
			{
						console.log (6);
					}

		break;
		case "number":
		console.log(1);
	    break;
	  	case "string": 
		console.log (2);
	    break;
	    case "boolean": 
		console.log (3);
		break;
		case "null":
		console.log (4);
	    break;
	    case "undefined": 
		console.log (5);
	    break;
	    case "object": 
		console.log (6);
	    break;
	  	default:
	    console.log ('1,2,3,4,5,6');
}
	}