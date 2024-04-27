function createSlick(){  

	$(".slider").not('.slick-initialized').slick({
		centerMode: true,
	    autoplay: true,
	    dots: true,
	
  		slidesToShow: 3,
	    responsive: [{ 
	        breakpoint: 768,
	        settings: {
	            dots: false,
	            arrows: false,
	            infinite: false,
	            slidesToShow: 1,
	            slidesToScroll: 1
	        } 
	    }]
	});	

}


document.addEventListener('DOMContentLoaded', function() {
	// Obtener el elemento del contador del carrito
	const cartCount = document.querySelector('.cart-count');
  
	// Obtener el número de artículos guardados en Local Storage (si existe)
	let itemCount = localStorage.getItem('itemCount');
	if (!itemCount) {
	  itemCount = 0;
	} else {
	  itemCount = parseInt(itemCount); // Parse as integer
	}
  
	// Actualizar el texto del contador del carrito
	cartCount.textContent = itemCount;
  });



createSlick();

//Will not throw error, even if called multiple times.
$(window).on( 'resize', createSlick );

//replace images with base64 image
$(".slider img").attr("src", " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAC/VBMVEUAAADp6uimp6mfo6SEiItVWV1ITVFFSUxtcXRpbXBkZmc5PkJUWFs+QkV1eX1dY2ZNUlbh5OdVWV1XW188QEJpbHA9QUNHSUyZnaGNkJNYXmIrLzFKT1M8QEK5vcJgZGcwNDdvc3d+hIk2Oz5cYGVjaW5kaGypr7UoKy1CRkpkaGzEyM9LT1M/RUk6PkFESEyhpal3enxwdHiprLAxNTgnKy6bn6NSVFY4PD9kam9obXExNDZVXGIgJCYfIiR1e4HM0NdiZmsvNz0lKStNUlaOlZsuLzGVrcc9QkU4PUIzNzqTmJyBhouZprN0iZ6NkZVscHSBiZBNUlZ+g4dyd3yJjZErOkN0eH0pOUKOpLopLTBqf5KFma83RlIgIyccICMeIiUbHyEaHiAhJSgdIiQlKCwXGhwjJyoiJikrLzMpLjE1OTwZHSAXHB4lKi1CR0s2Oz4nLC8yNzooLTAzODssMTQ/REgxNTk5PUEnKy4VGBoVGRwtMjU4PD8NDxA6PkITFxlBRUkSFRcvNDgRFBZESU0+QkZLT1QQEhRGSk4dISMKCwwPERIGBgZPU1hHTFA7QENVWl5TWFxITVFNUlZKTlIFAwIuMzYICAg9QUVRVlsMDQ4ICgtgZWkuNDdWW2BQVVk8QEReY2cEAQBYXWFiZ2xkaW5MUVUvMzZcYWZma3BZXmMbLTZyd3xwdXpuc3haX2RnbXEtQE0eMDsJDRAjND+JjpIZHB6MkZUdLjkrPkp8gYYmOUUYKTF6foNrcHUAAABbYGUNFBh4fYFtcnYLERQgMz1pbnMVJCp0eX4pO0gkNkIaKzR/g4gvQlAXJi6BhooVIScQGh8PFxuHi5CDh4xqb3SEiY6QlJh2en8THCFBVWQ1SFYxRFITHiRbb4JXbH5OYnRJXW45TFsyRlQcJy4fLDRfdIc+UmEZJCo7T143SlhTZ3lFWWmUmJxjeIwkMDnV1dXMzMzDw8SanaFofpKCmK63t7huhJl7kaeIn7akpaatrq7m5uUDfENDUilZAAAAXnRSTlMABg8XIGRznRgrIrNRxlBFjhLkq3lgXkY+Lc3DuoxFOuKAZMu+q3FtrquVH+vr39tbO5KB9e2wMPXs1p2A9N2tKfXq1M2Wi/r069bTv5D97r+D9u/t397by8n35+PHdWWBZQAAUYpJREFUeNrsm1lvG2UUhieBUCgEyr6VfS1Ly77vAsQqdnE3Hns8mcXL2BnPjJ3YOK6xjQN4NyFGjh3LS2wrcXyTRIqUKEqkqBdIXDQp/RNc8QM4ZyYsQuwxUpz4rdM2vejFk/e83zlnviF66qmnnnrqqaeeeuqpp5566qmnnnrqqaeeeuqpp5566qkT6uvrB/X1ET39KaJL773xgVtvuefyoy+fOHH8+PETg0ePHRm45Byip98KKN319mNvfvRhPhdXEm6Ly+UaHlbVoGpxuN3Hj955LtGTJuD02JvvfP/90kojFvY5HBaHC1kBLPhyWRwOtz9x/6FLiAOvS298+LF3lpYWtpbPbuYCQMrncwwDKYBkcSEr/Av8oy+ROHYTcZB17wOvfLS0dGbl7Ozsaj4nJnxgKQvCsrhUdWpqJqiqFg2W3+/2uRPhIwc2vO594K0PlldOzbVWNxvVfCqq+C2WYQtymvHKgsdjZ2maZZySJAky70oAL3fixIGsxXtvfeuD9VMbjUq+Usnny6lMaBpQQfl5eV6w07TZaKCMBviTojmO5GiWVx0JADZ95MA1E9c+9OHsxma7WqmUSqV6M1mMKHj+qTO8xHAkSZrNRqPBTI1TJGUep2mSZjiaY3hXODwZPnqYOEi65vnVDbBTvlKtlOoAq5AqhtzDLnVKsDtZIIWIzMCKJOED4kgaWdE0LfsVRTxIpXjt85vV0lq9XsrX1wrzpflyMhkLuS3DKm93cjRJcQgJqo8GTDu8KHAbfM8xrOQIiOJrA8TBUP8tL+abhWZzbb4+3yyU18rJcgFY+SwTkgTeoeBDkfiLhajSRFMIDM1FMwznCSqhgPgMcRB08VOlZqGQTCVzuWQyOd+cTzXXYiForWQGWZEcy6KTKAp9hWHFYlWazRSgYjmW4Vi7nAiJ4gGI+UvvKQOlXCwWy6UKqVQuWUgly5mQ3+cQ0FfoJZaj0EzADPhgXkF8mUkKwHEsDXXIMpLTEgpFL+8n9reuvT0Vi2VitVotVygXCmWowyT0Vw63RXJKNFQeCVZCYHYMdFoPKoMZRAE1GsSyrB0ar6AYjx/d3/3pg5cBqlomm67FUoVCqjDfTJbz87GExeX0eGg0D36Ah4dhERRnRnikmcSihELEQxG85XFKghpIZ/c1rSvfz6bT8WwkG4sVk5Bb5XIqVWjGwg4XzzMcGgdJMQzjxGLjABN+EBpmltZPkAx8x9glQZCVbPbl/Uvrymw0mo6mM5lYERgVkgXwVbNQFF2qh7cDEywy2mNHUDSNiDDTwVTIC2lRhnHoJyC9tAlImFEi2ZfPJ/anroyKYjwUjWRikOlgK/BWqlhIZR1B1ilxFOQ3zIEeKECaIUnAxZEGihw3GAwUDj4UfBnMKAq95XEKPO+OZI/uzzPxyrgYiobEbA3OwSZk+9pavVRvFKL+YSeWHWdnQJKdZtFOkE7jJA1VZxg3GQwmA4w+8IVNPXyhBxmowwk+EcleTuxDXZIWxWg8HsEihIahXMpXGtVWO+2fEZwSw0IMOe12lkFfMSTDUGaOwcYBIZmM40bgZTXA7/D9OMa9XeL5maB3OhvZh93pTfeHwFjpbDYCzkqW6zAVNtobrcikQ2adLJSf5LE7nR7J67RLUImsHUSDKEwr0mC1GU2LVpDJMA4lSXIQW7x3wjvjTkfuJPaZrj0RCgTQWtlMLgXjYL7a2Fxtnc0pFp+bZTmn4HE6+ZsHjx169ekLB994RJDtUJXwgfLkoH03Wk1m45BtcWjIBtaCpMfYgtSSZ2R3PLLPpurzX1amwwExhKyS5bVSpdFe3Wgtl2DK8Ys8yUiCfPyGXx7g9B++5LxjNwsC78Q2AidryCoDuMo2BLJZMbswtiSBn/BCyt+3rzY2fUeVybASEKNZOAib9VK1sb0xN7fSioT9CSUySXqCN5/3+46p/+pDL/EeSZDsLDYOEO8m69DokA1oLZoguMwktFsC75X5ych1++lIPBTQWYGvCk0owfZqa/bUynJSnA4r0VSKFg794VOuc887PiM54aSERAdn2ay2Id1bYC6jkURavAxSMvcQ+0bPiMBKAVa1XHIeSnBzY+7U+spWNR4GgMVS3nvFn25zzrvZzuB8zcKECC2E1YqwsBRNJui3WFbgIbiCgchFxD7RRWIYfaWzqlca263ZsyvLZ9aLYkBMF9eq7b86zg4f4iG2WBbsZR7XalEDZrUugrdoFgcfrxwMXbZPHsBecJ+iKIEQ1KDuKyjB9eVvvztdigZC8dhao3Hr37B+Q8IRCEZHnHeg17JBdIEg5ynoybDh4l37pDftfzkAthI1Vk1kBSX47XdbC6dioWi8Vq6+ePHfHqXHeGi8WH2aNhqM4CzMrkWr0QCrHEh5WeYdtSuJfaDLQwr2DJEYtlfI6uzKt2dOLyzU09DOJ5HV3+s8mIg4bWdDGpCWbchqs0FuGc0QW1CIvDyh7IdCHIgjq3StmMKuva2x2jp9Zmk2E49EcpXqxf8s9qCLsHPaMERBJS4uYgcByIwGGlaBHmFCHU7fQXS7Dt8HKQ5bGZxwsGeAIoTA+vbMeiwOi+V8+58Wz+PHZUHw2Fncz1N4LOqlaDNCbHlgSJqY8sUuJrpcR0M70Q6+0vNqBcL9zNJ2Fvqr0uotxD/VubcFed7O4gKVgpA3WcFYIBiDSMbuEeSpYeWyLt/JD6TBV5EdVm29Z4B0X/o2mY3lShvPE/9c5wzCOlWQnKy2CITc0r1lNZhpXG55VVftFqKbdfj+SUVMZ4pJbXTGXhRgfbd1Zqldy6Riq0/1E/+KliXIC4KT4zjYx5vQWTa9EjlGcvKqy39fV2f83WoiEI3gPAisoMHCKgRrLSwXsslC7cUH/+U0PhjkZRyusRax30Jp/RZn90gTqhrt5oy/2usGY9XQWLi/wqNwffm7MwvfV9PFQtk98K93FyeGh3new9hhtoZVswnPxNFRaCHQW4I36Cg+SHSr+m5zTSohhFUuVTZbp6C/WlhY+v6HH0+X08ly7e7/sBU7rt3bknZo2RAWpvw4xXokXp0K3E50q67y+sJiPJZqQlxBtENYndZhzRVh+XD/fwmYm55QvV5ecDK4ozfggkvDZaJIBgvRUuvW9qH/jUQoAueg3reDr7Z2jLVUipTykav+21AeVhEWzIpASzsSR0dGcH3KMYI8E3R362ZrAOIKH3qt5avbrVMYVqeR1Q8/rqcy7e3Bvv/4v/rUCV7AyRqtpTlrBFaCJpKVBDk4EbqV6Eb1nwBYuRTukDc3ZnHIQVZgrB8asWSr/Z9vHR+xBFUBN/TQnWIjj7RgThwnGcE7M2XpTmsNKKGfh+dtKEI8BXVjbTVr+VO7OOSPDatBOBLx8SIFhTgK0rot1iN7Z/hQN24f+gYDcX2JrKe7ZixMrB9bqeLq3C6CuH/Q5ZqAjIdCxEoEZ4FsJmjkJdnr7UprXRQWI0WcnittXCIjLDQWxntm/tRTfbvZJr4+rMq8PvcYtL0pZDysa2gPFKIc7cLUujCsG2tni/ztr/FezjTO3rm7H4RFnZIFj/aMzGQFZ41gawqF6PR6ZcvLXWetx59AYzVxfN7AxIK+Qc/379u51NyTu3zQd8ShemWnnaMp2MoDLcCFIzUJnaksi13Xax0JRzNaukNizenTs5ZZP35Xz5TW79h1IFqCsiTBegt3W7ZRqMMRLeOh2ZJd3dbGn3NcyYKx1vRHhL+B9cNcMrM5t+sT64LXLBhbDI3bGpMNYI2N2ExGipF4rxzvMmsNJEK1nNY2QBXqSywd1kIllpx98vzd319yu4I/v4oBJ+LI2NjIKPRakPETXkeXWetCBWZCMJb+QPUsHIaatRa+X5mPYJO1ex1zqYLkYWmkZbRiHY7ajFr7IClz1xBdpAsg3nNavOOlhlltl6wX4kYqs7qKu5ndF+IML0usZi2MrbEdWnbG14QNbBfpmWkt3nVYrVmwlk5rYauSSc6+eLgjR4jFK3iwDs3jJpgRx3RaRoMaSlfmriW6Rn23KWnY+K2VEBbsR3+hdXq9mc7PXt6ZM+T+Gbz1hr4ymRYXR8fGxk6OjY1bfD6lMPce0TW6KSHixg9hVds/01pGWtupyObmQIfs68KbqFiFuGIe+fSLTz4ZI1VVGk5k2h93z4OeK8JR3M3AQwrYvLe3N37x1nIlkpq77PxOtSeyZNd2D6MnkdQXJ20UyzEC7xBLsw8QXSKYodPFFLxqUtestal5SzPX7Hy8Pnd5x34mBuPQ2MnPvvjii89O4nBosi4aSMbpnEmkWl0T8TdNihGE1QRYkFo6Lc1cm6l0A6qwQzr/UUnATQ2Jd90AFchIcnanYEk3PuyWVy+OKFGAlSzr1kJam9sbG2iuSi3TgrOwU7phymcJQh/PUeNw99sIvIxm0i4x3nB9tkt2D/omK5XE9wJKSKuqmQtotebjhbkOtteHH3X5XDOCnaXNeOfUiBe/aerkFx5frlvq8ILXxGymmAJa5eaaVolVwIW02qlofqOTt9af9vrdsAjElDcDLKhE89hXn59cdMWrH95LdINwn5wp5jRa8/O/mgveIM+k2y8+TnROV3v8CZ8qw2aL0q8zm0a//OrLTz6XwqVWd0zTxwL4LlMul9O8Nb9jrkZjc7MeL7Y6u/W9ngwkHEEBF8xmrQ6Hvvjmy6+HJEuu9RDRBTrn/kAcyrAIsDRaUIq6udrVZKjZ6uwl7Ku+YQJuF8/QEPEm7R6SaWjELMveeOPjbliYwvI9Ds7SrZUsaObST8V8LJTf7Gx19D/3pX/aMuHRytBmhWc9sDClOEEO59vdsHo4AneQs0irqOUWmKus06rW0+n2kx3uf24w+cI+VdBGROuiTbu0ZaQl3hEtdMN8OKjDQlrorV9p5Quh4kanLwVd8IgvnABrcSTAsoGGbNiayqSQfJfY8zr8WiAaT0dqv3hLj/l6PV/KBcqrd3b8Z+MOK/5h2c5RQAudBQtmo+zm6OyTe7+JvzKswYpEar+pROy4SmsZMV/t+AWqq9RJZdLitZOwXB4dA40MWUnBIZiU/N4PrUOKGIrHsxqtDFaijgsqsRyPV+FiZId1/rOMOuyVGNJoG4HnYQDs05OUc3jG6Krv+SumfScAFlgLaWV0b+m0ms2kmGnfQXRcdzvdYjTknvKQ1iHb2GeffTo2ZmAmghSbfIvY47rgCUWMAizt/d4dWnrHVcgpqe1ORxbWIU+fHKJ8QSdphNvLYC64UcMIXloofHApsbc1MAnOCoXiCCtSw9zSeIG3UhFlrdHxyMJp2g4zoWVYYMdtQ/qVXBMn+P3TxeUbib2tQ5NKAGhFf6GFwaWbKy5WILI6r+s97ulJt0tmKO3aAzw/pGV3KOrLrj9M7Gn1DU4DLEgtnRbo11oU01WIrM7rCkl1+BzDMjhrZAw6+HHO43UocXd04zFiT+vc13RYSCuLuLLgLu1YjBWVWON/OZ8ucfscKm+HyEJb2UywWpYtk9GEWHlzb4+HF00nFEXUaMXjaC601054TSarHV+b6JO7z23hPbTRhrCGABbLWxLRaaV8+gViL+uIP4Fv+P6KS+Ol9RHZ8NqT/8/rIhf6/I4JJ2e2IqxRvKclqG4xHC5u7e2E/4m5M2l1GoriuPMsiiNOKCgOCxVBUZxA0IUTguLGRVs727RN0tT0qo0xxqSmatOaxppqq3WsitPKheCAgrgQXDjgt/Gc5DrsNXD/L3mtbh78ODnTzb1nMkFYGq9RWr4cF37aBn83pGptFlGxlkb/DpaFsCRd4eVB7RPTHn7UGkXFjfbIC728ZeMNsqyGZt8LqR83V1EV6GlF4r9e08qKQ0HmifOEaQ8/cZOgDn7TQlx4GYit4bUfhvQi8ZjdRC1XqYcHpxVLiFXBNFSLbQ8/RRFIE2iZpqZRz4U34rrfbEEVHYpGLiUqVxUTyRf4Ji7CKmI4VPlnB1j28OP8Y9vRtkA+L3RfKLvWfAb+PRyNF1RhKGVj+cCykonUsRKGw8tMe/jxZYEEtEyEBTelJru2eWtzWA/FOIH4qxbxNMIqQKKVq6iWbDY+rRjBrEZOLQkKUVXAZSIuKhOuGs9D/h6S1glKAIuGQ4ClE14b3P+xfwSzGr27gvMTAlye6cvzP7226YSSv1MPL0AOjy0thFXA3GGoaPygxnLBM3G9DrAUgo9iE3B5A2/QHMCvwaABL02F9/rBVAGWWouJqJ/D+7lDVdCMpstyOJzSKZWQlkIC64KrqTZBxGuQy/fCa/OOV5Ry9UQWOsvUw584zsmWaj87wO4i/ji9gtMmEJfvusgvKfJ99U5YwRD/sKJwupRNBh4+n0wUj5U9WzVa39kNh4v0ShlgcUKAS/ElwA/Hu+qDsIIhmrSgoNOKoYeHBQsMhyXPbmo3GQ6Hkzv9EtgW5UXFCRxXtm2vF05lSJ0lUYIuTRotC/oOmDuYZuMVs9XhyKXH+7peqeCzGKhMVXF57V5oR81hTSoo5eO0SwPhMJIVOwqvqW12q8NRa451+n29AsBKQKiEqsBVKelt2YDMITxN5RQoeLJ1aDwEpfSJKuQOSu353hGMatL6Y9XqcDjUQWBf/q3DDT+Nph1WGf0nHGJLKx1stIBhBIJscM6tw6yu8EzrHKvCxttqB4EBJ70/HPb78NEv3SS1h2G+XYbhsCPRllaBhkODs+4wW0qPPQa7/QJcnY4PLfjoV7kuaYSYZuHeVoXr5zIYDk/9CocDS+Avf2Y1dxiXy+XgZJ1jAAyE0I7DhbdwU7i8I8z9NBsFAWBBwUNzhwSGQ4PINz+xuntgUU4CWsfgAmRAC+4qfIcvakNoQU4aniYsgawUc4dCOki0slJfNVSv/YrVRGuyKEmilEMhMPwdSPLuK3dCWWD9k7VgKV2E3AHD4YtokDsMmvc/stp3mJySRBGASRQY2plvaaLmkkchJvD4tzkB3lqmpbS/Ef+YoJmk9pTRRGvk0qIIOiFSYiKlBrB4W30b7ot4ixCWmIkGiVY8loVwKGuKe5dRWKOW+CfgF08ALipqYicMo3krXFizdFjAx0QLwqHfd8DqkFecB4w2acZsyACoIpztiNYFyCgsSSravNcL94i5OSWBZqU0HKakyoAX7DuMNmk2HslmUsVAIgADaPgsgk44mtwLdzPNtIpQHorZoO9QwEQLw6FiXP7KZlY6N5XxBwwV0bhAAIt6sKJj8r1wdzxMXM+V+1KGwoI2fEbsEINo3U9sZqVzM9lsgIvaVwocGF5iyvXChjV6CccNAdbRAi2loTqE3EFrvGQzK52S8mFlU1R0ZAdSc5tGyLBG7uGw3okgLL+UzkIprZny/R9sZqVzUjisEWiB6/qjDAJzVQtgharJZQ4ew0j0RRqiYbDQymmyXHvCZvtvVgYmVlFlUCm8/Nsh9q2Qx0yMr3B6LoWw0v6aBTRLyzIvu992jWBRiyKJCMWV+A0MvycStho6rEWlAFYensPg9b9cyeQ19x6bWemiYLoe8oILPoAUCmER51bIR/mOq3C4zlqPF3614aWKx/NOj01Y4yOBEsjrjwBhwiL2g5CHTMzpIKxEEidcACxsw+sDgPVgH5Mp/BZ/7CwFFgi/4D8txX4W8jlNc4ccLkpTWC+wDQ9ZqeHcYbOxvDICpKgQEaWGCHli3Qn5lMfFMLEb39HCU+3Sfil9oqoalt1iFBay+htSDO0M7lidJ0YrXFiYwiMsyEoLNHcoHieG7XQPMVkcrkzGAkBU/gzVGN5RjfCtGZNGholrEsLCFB7DYRrXLFKQwtvOzUNMFocL/oYVo3aFSh41iXbZXjt//vxlM6cvnzIvDGgTluBjmIn8hhVJHRN42268ZBNWFPkgpQjFFHwkk3GPmDdt/lG32651W92DO2eOnfi///qoPaUSwqLDLfwlfI633fYrJitpgAVw/jYpn1SyXs+rqtpw1FrbdeAgwEeXG7X7B5ct/6+88KR+gJX6AyuWkcq869SY3Bs2csFRoERZoX7jqscVldyvDcu57HFPM/luC7Y/dYHX7P+5hrGU8ze0RvNAKxhsIZU0dmHFkyCkA7goqFgSFM1zqmLZytmLFzNSIle7d6vVbjx7e6PbnbH1/5nXZK4MsBJY74BewIQZsaI5jstkjwYsK1lPBkLr8jnV6zjRON1XOb6mnbt+NZ2/dlRrtW66d15/+vrkkds+OHPxf4UVicZf4AZNeAwToi47YFks9mgQVhRw1XHKpW9QcTgdBlDBf+qqadlO5tLVixcupTP6fWL0Hr/8/OVjr2U59sL/M392VbnUQVjotApQSdcTxaEJlsXmMuuCfBTGDyKnX/V0BoUThYjc5A2XXLhy4erV84WcFBcuP3j76NurT88fdGuO8V9wjcdT4rGSzqNpxcGyUlXPsR0mYY1cGvndyEoBI8zhg4Oa4oWS1tQg56m/uXL16plM8sJpyTKsmnvv1avHvWc3a5b8H3CNL5X7YFnJONLKH4XQXKw2AdY7FmGN2lOP0UiIv2ggBFhwLmZVa8qyYZGzF95cSr+4fvt6TCoKwjH53pMPj9/1YKa7I4+f9K+wdB0dfAwPhsLJhzCYu2/atsPkTulR25N/1zqIC1n5h4hKsiqbGq8RyzuRv/rm9sV0IS3FTgpvv3148vL9tyd337bc1eNG/hsswRyKMP4QTCt+FA3rzIXTumvZP1iENXqDHwYjvwWGBaT8w+VSJjGbnsarpNF7a0kXL5w8m05cPZdTrcv33t6EU9Dv3nrWcqYu/idY1RcR/0C7aBTHTGejFy+9Oc0b9kcWYc3bhrBQfzJS9FjwWBQSA6VJVLCtZqIuNNpc/OL5k9eunomK5balOg/eP/nWg6l07qZZI/8B1tk3F2EAIo5qAFbJTPL6mzcXZd54zCKsn8ydWUxrZRCA1ahxX6JxN27RGJfEGI1bNEajicYHTUxMfKB7S3sKXWhPD933hfZ0p+spXSm2ZZUqIgilyCbKFaqgqLjv64MmPjr/OUWMu/EBpqeUezV6+e7M/DPzz//PhSIWn0HE+CxkhvCXTMPim+RBggg6LQ5LrzZtFrqptDGWNrPYPUpJD54qzy+ujU7Ucpbk6af+H1hSMYx6AlroD8ITacmEGEZRHsntnQt4/HbEfpDnACwQGC1ugISHMOVxmAwZCvRRdq2XpLxGt1koNbOC/v5sYXRmcWYhlfM88F+mYp17/0W3PPEQyBNXXXfhmSLhgJge/s7uQ/UPGONns8hw2dhRhHU5clLsfQFuwIq5PLRrSqgkEK0g7oj4Q6VS0GzkCaSs3ikvlSa18rzNEI1mR3bWJrKhiPrhf/e/u/GWhx57auTlUXQV8csr5XFPHLYo9XBpaSe6mRqthQI1hltwx5GEdU+bUscBLDrIAlhdQnFQDpWHvMXhCmf90XDqGa9VFd4ei2obRXdHZ0ePUh2pvr02P5Ht71dd/88XVV/0xGNPbldrtVqpUhqcKJRK2Vy/UymQCjsUvSIYuMbpA1jdYgxPOh1jRzHOuvTXul9bUDgP/oqG1emUB8FnyUCxwlGXKxpysRva3M53r1kSJDRysHTd+Wwhszgy6PFETA/e8ffGd/Xjg5VwaLycmXh5pVQenS9sZwoh/5DFYOvUWadYAAuFWZ29arkzj3tGjiCsE+5jgtEDWixkhVJgBUEVN29C12M4hsLZlAtdihEuOY0N3vx3340JSMpttytUMk92ZPHtclQexG6/8O9Q3R1K5bKZicW359dGtudHViZWqtnKeMnvkuU1cQlbZ56CvAFlOwAriAfWjiCsO+492NNh7BBgMVYIIrThpqTFAeNlQn50i8hQFFRM3Wg4d358wZUg08YOsTo4nnl5bC0TTeLO2/7SzZ91ScoVLqy8/PbM3NzY2NjLI+XC2mguPJjNRV0yS9IEbbgdOjMH/izdCrGSMOGRxSNYormg8zfhKEMLmQOXYSUU4UncEoDBFmEXwILLafwwPSWgbQiroFzsBmlWdGM4HimVx16uDOFB28l/Hsud54kMZVbGgNXIyEi5OphZGK+OjedCuWh/1CPz5DEMtWlx7FrU66CRm4i86yjWs+757T4hG43057P2YaF9PIMMzf0FxeqnYdE3c5ZKykbD8sZ3O8GGu5PLV6gxp78KPzxOOIk/oXX8dTc5hhbK1ZGV7epKuTKeCoXCKRj/4Pc7I66IB7eY8kkMzljJB0RmM69bMmCwWPKRIwjr+AcRKfTiIVbtyAGskPbvKBWEzGMoHAoP0bCiUeYW00q/tcEefeutkjutE7K4HWK89PbaoAuCDNX5f1Cry2AzvroCA7UWFlL9HgfQt0CUC1O9ZUTEA59Jk9OEqTQq0C6FzqyIawgct7gWj15Z+ULebzbt2y6Lw9n3WPCwiH6XH7n3CA0L3W4HsEKVWm+DKr3wwjyXEprdZgERzaxUxqMOj6Hnd7ROujkZKr88NjaYLUUscjidx5wxJggiLyfyeYfFacrn5XJVfEADv6kWCtVKExDMrh29Gzjv2SfF1LGYiBQZ4RSAol89Dn8uG8ohl3WgWdnswmCQbCTffH6ulzR6fXy9aSg1Uc0upGSGnpN/q7nnyPEKjCyYqIZcQeWAArp6oVNOIoEDL3rNQFxjSKL11iDHsLhabYNMVC216mUWWX9h5MjBOvVeGhQIj/FaKCKlMx0kQiQsLJrNhvwQOIDL2r/vFQ26qLp8jd6335gxNEi3lNejJgbRjei1SFB8wUFgcroyUKiWC4VwPy5HM0aZsZl8Fq8DWgsVcDDhGVj6DASmtMVtcGQIMwQ1HKvBEwmXjx6sh9mogMx0ryFYwAqhYiyQhqUTduKhUig3RF/UhowQYGXpESrb41ONqYnXZywNisO1SgOF8sjKyHyq33Lbfrx14jUDQ4PVwVI4YFDZYJwaGw2B5NLztrlQ9ed1CnrF6JoEDLMNqGEacBy6jZyaLrssO75y5GCddu9+2y2CxaPLyai4y8zyZ0TXJfFkQyl/lLnUbl+xYBLB4HxZ1HCXFhc9pC+dEFlcterrb1az/lzkTobWaY8qwysTC6GozGBTQz7DEUqntGiAkxb+q10AjAVhFQxkhcKyXh3Xx/ViaOt2eZRmbao6duRgnd/ZK2C6uZGBMPeNtx07I/SUWY4+EA7n/FFGsZh7cekBKtXRMTVp9I+M9idIH0uitITK84MuVyFsuh1lPqc8+EyoXK7kZCaVWkFfomy3muEFuISQK8Ed8OAdIReEc6BitQ0OhsLhPbkH1oEBO6e89vYRg3XCg709cD4ApKdHxNH6vAkSJAFFK5gedABLx4oHUimgdaBYwKqARmStLcoT9cD2ioeitByOWE5EK5lyueaSX3nacadcOhCegJHmToNagrrVdGar1Q2gABeImR7WJ4U6Aw+ODqnFNptKP6CxqZJD4bBHUpcszhwxWOcL0OFCRY9agmq5ICRJIUkgZHWfFTSMmZvK0ntyKSCFYAEr5p74MpqBOPc6TqUd5YwskbbqtKxuIjMzOj8xHpFfetr16kitFo44VWKBiM8RAiu71W0320GsjJiFEM71oXRQ0BMfUKs1Ss0AJksVxh0ib3DnaME64UE1aL44HudQAIpq7h17dXh6cnJy+KXVvdZSPZHwGoEXY4liWY6WFG2EC7QRVtG099efD3h9skrN6TXajW6hJrM2tzizlnEZbu8M9rsCOKHvQZdcaO3Axu5GoOjHDb+GBx2bA9fFhqMCcIZdgylBtVy1wRre4c0draD0AoXK9kxcpUg3Gomtl5ZnX3x245P33tt49tlnN559cXb62NYSlfAumYGXVitV4P5cO2wYpx0WrVgwdW3nLVfd58iGCZ83nRbKXZW1nZ3XR2pRuQDHcROGWHG1ZgBlpXXKDaDgzfwK4YK1kcPl90LYpVHJ0f0bslChkCI42pOPO0Jy/IMaDJbtPrC+veVnP/n4qy++eOedb7/96KOPvv3i408A24vPvbS7RFF1O+DSdYmIaBgE9KrNamKeGcr9/Hf9dWvEH1VSaV+fHnPNw/Dp0XLJHx8IqgbiChgl0KUFNUKQ3ADLB6iQoG8YY9QJdXChgxhUS04YlFjeBWOshzS6e4/SBJ4LFAT8VZobjebyxrvvfvLsK+vPLS8/tz777NfvfPThhx998e57n2y8soz0y+vWwSLZoXL9xrlXqzAOeHEOzZl+4TsPJXRFAhLY0uBL8pFQOTPy9kTYJZbEJRJ0lZiZ1iGaD/h4N6NcPqPbbUa/C74eGo0EEr0eC8oJAjPJwplyLSnW3XaEvNalmImQ+xqx1Wffe3F9eXJ6GORV9GV6enJ946uPPvz2q/c23nt2fXizSVFuobSLJXYwERYzo649OvkNNJQ76O2LymQ8GFXY0aHQy7OLO7CNEeApFAJ03gspFjxoSp/dbvQBLpjW50v73IyyobiL36kAWJgJonlD3pOrhQKGbuuVR2aaxYUSyMp8DXJ645XnJqdfPfbl5ibUZ7788tNPX3p1enp6eHr2a+D19cbGs7PTq6261y7lcrudoYX29MNtmAbMsELDgF+wUYJo3sm1C+1uM0sdntt5fjRU8kAJltVlNuu0ZtAgRAtiEtAonxHE5wVswIu2RR06hoKKftARppKbHLloVqYWaU8/KgcHrseSSXODXH7xueXhY3sQIMK+CsRbEjguLRB9+ipSs+lX3vnmwy/e29h4ZRLhMnM4nfJUYd+5o8HJSK+QfPe6qP5MP2EQWgEEx5krv7kzB+ONLFzUsQ1eSWdGVGi1sgMnozHtNXq9aZ8RVAzZqJbuJVVhKlOS0Cgxiys1npILWFNHxMnf8TSOQ3fM9CvLk8e6tIAKJjnbNColugjKpoddT+A1Pfzqcx9/+MG3737y3ouTq03KB/mJ3sU49zHauSNUL8D7jbfWpowGmVxjN6btoni+sPj6zjz8iwMQq6MzOWCJdjPyUGkglUasQBKwfKaRVYIh0tfBx20DQUKpAWQOmM8cxnjue0897ijIwwaZrdH49JXlV3fNOg4PUOmhnpTHLXgSXBkEPDQvMMfJd7/54KOv3/3kxem9OqXls3tlmSoz6/01ZtQ7DeuNtzJ2Kx7EFEa7jsPujr48OL9SGC/XeHatFsW1dORuBtUCQPAAqQR6vBSQM7pB9+BsRTcUbdDdcEpl0JMqZUOOAZb39OOOgJxwpcXia+y+8txLOq2Uj1JoEIilu/WY0+GAHQTg9YxaAeo1Ob0MuL4FXLMvtSg39KnnC/NghHPMpPc2rJ2dF/qNUxYM67BqrVyNzNU/VKmWMmWP1gy0UO4Mo2KQjVIUQKISCRIJBYEcsDPCigi1oF41lB3Q3YMqwhGF8qKL0LuFZxx3+HKBISBpGGfXX4JcBtJnJBx6A2xKyu/W5IFXnjAAL3H3qxDUP/fxN9988fW7G8ub9TSH12koQNQww7ACoVm9/vqbyjoPjyu5PnMHXInfna9sZxYyBZsZ6RUIihnA/CiSBhUjySLCBeCodJqeZMvhQYFLKVfKTUGTI5odX6jJMInx0iPg40+XyYyNydlXhVK6Mgov9LDoTy7MdNHgHoczGCTkSjXgWl6efeeDDz9+95NXXmpSQlGnvDAy12b1FsB6442dN1977fW1DmMPoVe7zV1Ct1mSTM1nUqVKjQ2cIG2002uglyEVixVJKhZLkEWglUh7UchlFkJkqrCpYI3OY84A1MzGc0FNB/fwQ9NTHoloGnuz011SQEX3zHBpYAgZ87VDnfQEZM5kkMDin706+dxzGx8iW3x2cpeyCgRYZvF1xOqttxhYb77+2szcawWz/RmlRmGGxEc7EMTLE6mhUNVitaMBRG7aq7dRIb2iKASskUCeC2jZrTpOpwjtGeaDJiIJiXuoMu4x6M3XHLpqXYj3a8n1ZdYUp61Y+4b4G16snny/SwYJXp4Y+GwYYvuvPvjwq3ffe26z7hMJ5OWZHWB1AGtmbvHtOYdRCIsZl0ykWRqTxV8Ou6K1shgCKwhDARaAAVQgRcpbJOsMMGSIEEQg1YKZfQOYyRkkiKQDzr+UKhHMJu274rhDlssDeGxz/dOpNh14DoDBA2/YlwZcuB/2QGUWJ2EbBlt8FpTr4/dmX1pKixTYxGtvvLUPawcUa3EN9k/VRo5GafOSVv4zRH84nAoEchN+rc+Xbpsg6FSsCO9YPXEAjKQY1RJyYdPQZoKuEGgLc0RT/sFqQN7tvue4Q5Yzh/Tk8jTyV22hXVWbFvqCYEGNmS92hKORgEMmM/0wPLm8/s77H37x7ovDTW9nj2oeUmhgBbBoxVobGR0bHZzydSjlPZSQr5DjMtg3c7lCpXja6GVMkFGrWJ0qUvUYCR9e9EGSDCwttwOaQpLBJA7bPU4YiRequJxy9+2HnPSccnOU01pnc4AVwrW/FCJczJvD0IJTdHxNNAttDgGPRQOO/rmvP/jgo4+fnW5RPLFq7M3n24r1JlKs0bGX50ddPrsIM3CMwk7YuZFHoEHXn/JzDlgVi8VYMbFExhCpJZJc8gIwEgIISBvNQrbkGYyQE868KWiJpPzhiSwRFAsPOYw/2zFkf+kzTh+rD6js+3YECUjRyDg0rT4Ue3FE+EJpCOp4MsNnQGvjw/e/eWdjcgvRGgVaEDjQivX2yNjL2ysT2xqjVoJp7F3cLvjRHZVcBJoccGP6QK+KVCJWrxcpANasF+tNMrZUj1GQKIIddnSrbSpD0Jk0yPMwLCk3WHMqTaJLjztUOcnvsU+yaRYMLFq6pqQgtCnu4+LzUQvSM6FMagi6Epxq8POvfPT5+x+9B7Q6xKqR13ZeaLNaG315fqUK+xNc31QcE/ugvMdXBmWpKO6pLPBJL8n4K4BVB9NbShTrxiLVSsRaSwAsQXpR3V/H6uzR6w1EMolBXNo/lKpM+OVq8b13HHeYcn7ItDXNYaMmEJB9pyXUgVYxysX4LlYfFMhBWALP4DjshXksyuHJ9Ve+/f77D9+d3AXdkr898+bz4N3naCMEVrDPGvDZO5SY1ijkQlNzPuDBna6Mk2qzKhZJIEUhYPVmPdFqFutbVKy5FEuA1wKnxVMMqJUGwgTAYHyGK1WIWjQdvZcfd5hyTk2z+Snd2MAI7bW6tDouB9Gige2viX1sVGdhE5ly2D8Uccg/m1yffef7n75BtDolxOLi6+CwGCOcAFaVhYK+rpWoxGY29P9LDM5kPt9fK0HKXqRtEGyuWF+Kkc2lZrPVWtqqF1utGNXyksjFm6UdCijUyOmxB5ahXGp8NIMT3dIrTzjuEOW8gv5YB485sMqoFmIDZ99pkXKnkHoxS2Ifc6CApQ6t1FLRfofhh8n19S++/+mDr8ESRQp8ZmSGYTU/US5nCuOlWnjKyI2rBF18KZcn6hF7/DJ/BieLbedONUkaWKvZ2moWW7sxam+p2GyBZvkg9Gd1dksgOww6Uag15AktLoZxAw/6AQ5PAJbkS+acfR/dCcK4ediGpr9pe3kQaFsEnAALToh1R+crOaBlomn99PP7Xw9v1bt7A3Njc4sjo0ivyoOFhVIonHUa3QKlUkonhWyxJRCULYS4DdoIYQ0EUt4mSbZara0tktoEYHskCbVr2mlxeL0SaNQKQiAMA3U9qbdnCg4PFrz+uEMUgMXmAS2m6x2WRMYSdVLaHoEVEvQNiwX/iDlbx+50TBT80YgMaD23/g7Qene4le4VpOZW2s49U6gAq1wuLPAK9ZiAglCUrwmi3iJ/IUnGaFjgnZoJcFIJQLW11yq2NhPkZqu4tEUhO9RBWS0+oMKSuMmQlMGEpPk3B2UyLEAcpos/L4NgAS4EC7qTkdAqBU6d0bL2ssiYIigXanbrxCcqfgghgj9Mr89++/PPH7z3UtPXI6iMVGFfdQL0qlLLom1+v8dq5Gkwa8LNFYk1SrUNk1VCUw0ECzn3paWit9Xc2tptNVcpcnWr2Fz1xraMFLJDIV8wEFfmcdxEwLlQT//2GyP9FolMdpgu/tpMbwfqmmFoMbAOolOa0v66uB+esoEtL1iuDLk8MuS3Zj/6+edvXjy2ZO3p3V4pb1eRc68xDST9Q7a0Voz1+IRSKCR0Kgbk+dSgiq40MM7dW2wivVqKre4VWy8ZY5u7RWMzAZoFTgvmhZnwfNJkcAZcMADv9bGop7s3epgu/oZML7r9iYEFoQFI3z4s9LSzHxoWo10AC12yZRpc6I84LIjWKx/+/NOHs6t1YW98JAN9RYV9VhDte6RptkbOFiLjhp/epnHVoK+SjtwhZF+CgGF3a3dvt9h8aSl2bDW2dAx8PEqm7TqABbuHeSchN0ERMlJ9bcKFa6xR5YXHHZrcmukVidqNkXzw8iwGFw3mQLkOHD0XrYptWqUIogURxLPf/Pz9t8t7FEsUHCllMtDSHqZZeRzgk9N2iUHD4pjNXezOHrEymRsXN5i4oQnuvL60u7u3udqMrR6LLQ23inurJEmlIYgX0h4eTnWgpAd3WgpzoxEVpnUkD9EOr8vQB3x/e271V+VCoA4S6v1EEV6gW9AhGMyEAh6ZE/tsef299396/ytYEjs7XC+HC+Pg3IEVyrpB2N4+jBDZ4cidVKS2qQ2OsMxIxVDc0AQtAhvcW4XeCtI43SquvkR6j7WKKD+06qR8hQ0zmKCO5pQ5LJ7SWAaPq0RB2SFWta4uiEB4v9ICh0U/fDZ8tNNEpmb6q1nSusWDJkGg5YEivW34ufWvP//+m/deahkFvMpgqsT4qwC0I+NO3GB0q0026CzhsqH9WKJXRXOiOu3c61sJcncP9CpRH94trg4n6tO7xa1jacimfXadlCUQazDMYABbDMLorZlKUCwWqyJ3Ht42z0U1EWr247W91r6P5+h03L795EdKY5Iyn0gAJdDqFCULfig5E/rp52bfgTTxFXDyAkU1lKL1imGVTOI8qs/g7IBDAGyJGtyj2JJTLUHc0KJirSYEDJurx3aLe9OUd3KzuDecJo/tQcUQYHWhwaxQACTgnScstbltXCWWKIeSJx13WHJxQdRujdynRTstq9fn7urj0kb5q7NHqPbdPB/RElgKUQeeNEiA1kfvf/PF8mpdysMmXLS/okuFSRiehfnczyQJtpRuIGWzJZaw09qsQ6xerO8t7QKrY8Npanq1uLlsTAyvwqJYJyEs1XX1dYsHlIagQYVml+HZTDhpwjTP5GTnHHdYcu5ddGskwGIskU8Ly+eF8i/yT+0z0gjUATE6gkBe/hfmzuyntTqI47hHTVwSjdFo3E00GuObPpkYjZoYE5+M0ZyeLmftvtP2dC+9lbZaBNsitYqgVsWNWpFaXNCLWBAsuLK5sCjugIp7/P7OKeDyB8C0XvTFq587M7+Z+c3Mz3Pv653meNC9Vq5UP/vm85WBuSRFdT7RBlbwVy7CKujv1eapTJjHlQ7pWdKJ+l6zB869MPdCdqZBWAUmp/uWQKo80jdTHs1Oj2bR4eUlZliEHdqI5/LHH3ryoQx2AnIPdJ7dsm9ykQhaxBCbXl6xxRQsocdLt6t3dUvBtSvN8NR+qN/sClqktbHKwjefz9emR1Mc1d/VBlbhsMIK3dqBhL7NnYzhKlpD81a742FXD5w7ssEXxsenR6b7ZsYOp8uTfXMTo9mBkezobBZ67TWqOdLzQB7/cegt4Y4H+4O2oMb7UNeV+xdpXSahlbTZo6zdpRVIcdpYYqcSAWRKAPF/Wk68W94ddNjh5L/8bH6hPP6ClxeeCMMEZb3C0+MWS5DKM+a2SCHlVXGYF7db7n1c/QKywfHDaejVyAAQDfTN1Gazw8Pp0bGZdA8pPOAWk/cIUfmFJL1Db36q/5BNyjDeh+67/ISW/ZJjJDTemhQnvxvJqyIUZ9WmDGp5PBPfHVianfozgSjTcnfc35uxlEzEbc0v1yeXCjradV8vYdUNvQIrvd/RE+m9X+hhdWBFkT1PDzjSKDTMNGbBamRyMjs7MZMdHkvP1ub6RgaSWcCCg9dxAiwwGs1JsETz4/1hye6WVB0Pde3fJc+5Tg8EhijrVnN/ncqAlNnKsiCi+C2CqykyKfkLWAi4Wu8zB/02cXVsbPHzr1cq06M9PHWPmbwfqeiVHtM57XlnZ5jV0LRGQ2PwubXLlXyhkc/LerV0eGyub6CSnq038KMQKDcAi8RZFOO0oTeF9KgIUrirPy56JBv/0HP37ds9PjbtkXXvRLW4XeUCLQ1PMRqvUuJqGiMpnsqwIO2KchEvz4TvwfVriRmpVL6an6oPwBC10gN+3GGDFWihN9TiLgyZD4leNhQxahmr4GztHuprzPTNjIwAVt/IWH4UpIZryURtvW+8HMgCllHNW4Uc3i0rojHeWXQ98Hiv0+62cP2P9J/esm9yoWi3Q7cILtnNK7C0WtoU8tKqpm7J5qgoVrNu2gxdgUs8dL8fb4RqYYjfrqD7dKZA68xtFqCS9coBWv6hpP7xOGkpQkuyyerMmK2vHR5JBgis4UKgNt63BlLV1b7ViUChfDibTITQeGTPuUsOjFzYRVPOdchss0qiyKFp4vyWfZNLBTuZF2AgxBQVWirWY1IlfJSqKXuOS90M43UKRELLfU8YC+g8q2OVlfk6epsPJ7TM4+gYUh5GBCybRUxr7+8aIhc3ITVjL7a6oqnseGMJrCbL632rtZ5Ada1vrZpKTkxmlw7DDL1G8paMZHM7BUkweYTerjYrJ1l14oOPPrqPsM5xiqCl+C2IYonaSHJ8bDYi5z9KUI9f9mIIxQiVKzK4reDjfkdJ5CcrlS8XahX4eIMuY3bL7sqhvPznD6TCHaV8D8wLU/VOV5tlvW90Es69PNqYCPTUQGow1VMfzjZqs+kCYPkMNGO1lhxRSbTjv88Rb7N4tILIRB99DA/w75scI4mElnwkKrggvDo/89d4QCfTws3OjkCrDLuwICiuQrU8bXej5c1DIzSdr00Mw8dTfKeNoNITVpBWOlvquD+AZFptUHGWjq5uJ2pYI5MDY4cLE2t9q4OxZPWH7PqgLz82nM/mexI+DbIdMscjCYRW1BWWGEZwCq3PP7mfsM51gxVRLdPeUBgkVoglAgABXICl2/HzzbIgfhKG5BdSDCwd6oYKaNfHKsvLlbHJRoGlLeEcWO3g0pfS6gee4GNGNIZrhI4P7jdbxtNL6FYdm8w2qqFkvZJdXfTla5X0HMIHGZaW80iCXRarYOnV23lekHJtbz3//D6a4anniVAtK5x880yUcfFULF9gKUqhBXOT44edUpeGuLB28gVGEm4FO21FwaObREZdHxsgqqU1u6FRshU6MDHhTyXvfaw3YfSFWO39T99ja+tdXRoZQK/qxCwQZddX5vLVWnppqpGFD8sHIiiUmjwihmTw9A/Hi5agzUpTQk5/z6tvvQpY+yYnCjIt6Jac+JAPTyyRbkdE37zJ0O2aYvOWXybXLMvriCHGJaedqNbCV+XyCFEtR1wiFghYRDLq12xP3heJIeOxPHGvM9odXIVelQdeKFeyjam5dL2Wbqw00pVawTeThX83oB1eRHerYOUoirNHo06O5qSiuf/ND968oGX/5LTiP2gxECVAVQ7GnVoEoQVATVqGZqmmWZQHrei9Dklk1FCtL6vDk1AtmnJF3WDVhBUUX2t/9NF2qIzJwdCiO57h0dNbLqdnBpfStbpMqlYthKrradzgw7fRPGcXnaKV7NPihWKU0VIYJrjv0Tc/eHY/YZ0RFRRaeGKniYu4eb65PH+vGrGrWiqFlkwPZghcNN8dlwQPtVSuLH41jG56qJY7KBFv1fTwtmyg49lSAfNMISPnsYVbSYvqWK2RrdTzcyvr2fpgYW5lFQ3mCfj3CGkw5+xOHH8c0SyxKGjVtCC2vvXWqx88e1XL/slR1zmdoEWGBPZ0S8YFXrsL7fCR4wdFn5Ssp+nodQSXYHYIdk4zAtWqT46Mj75Aa7sl244dOvz6fNr8dGcBcalPx4v6tlZpsjyGDtW8b3E9WwOphdVsZTCQqK9n8wGUHCgt55REK/SKJirGobgmcHe//fybb755Zss+yqVOQdEtKBd0a2dUmuOJ7OKiFU/f1K29nBq61Q6SlD8OPaANGPZZhh3OFYx01FICJtnJ61sd+XT0mUfhs/C0FSU+3JGxoHa/PjpIECV9C2vZialAZGotuzaXTeIsJFOtPMfwFP4cMD1twvZSncg99/Hrzzx7+772OxzjlmnZMcpqbRrinu/aLUbI2qWSPf1uv+nOEQmOtMnlsDJaw3RlArWH6fHRAPjl3A5ZkEuX0mnVq28zZPyLNZmfeaI3uFaprWbXBntCKyC1GAit/IB/iqHXrSekgRdkyEI7niJhL9ScBj5BfPaDzqefvrZlP+Xoq50CRHHy+JogTfUCruZSjJ1S145qEVNUSJG/B0XKHRftvMowXBlcGMYE7AusStDnSOWOSDeXLsQefTfzQiTG8uZn3znUDVgT9VRqca2vshiILfyQ/WExFqiWcRMWYNspHMaUx6qlVSgTAZbGR3kYm/udQ/qn34B/3085EVPJ4CUboh28THu8mmHXriXSut0AtZlQK8SgXHzGhnOenUb4UBuYxjyUShWN2vTKO/rdoXxPz30v3ldIxTTuR551Of0W60S59kPf8GIqsQJSK7HE4g/Z1Woii6kzWl5VzJAVbSxLsi+11ynlXMGX9Ow7t+yrFRI7lJq0YIgkhFBSRfLZDVObtCAkXWzGp81CoBy06uho0MNoNXPDY9Wp8sD40uGYioqWLHI6HS+hoJcMv/h8IBXSFXO8KWrxm2oz61OR5GClb20lklqsZNcWvT3lQjrAUjyKhAz+ZTTaW9U0T6l9GlvR1d313a2f/LbfA9NHXydJ/9UtK6HlkWExe7Rk7SJsdlNFOe9Rure4YInhaXYa4UNtbHJ87nBkiMeiIlQfMq4Akuhk6d1XQvlUyIeiVjSYMU1UKtWJ9dqUYW5xIru24E1WK4UeWGs7YaXF70mTd8MQlmgNLG0XwpZnf/ztxhv3/UGL42w50GqeiaBFfJcH0nT3gMXt2SJEpTGGDhsJIyWnlrNtHZXz4/9SYxguVzHmOTDSmPVF1MhUgijAZ8lIIfX0h54UxuiMOnv3/S5uol6tY2Jd/k5UBmux9akG8kJWy1nlMjc2w7O4PsRPgwaxlr33o58Ba98f4TlZX8w5gUuhBQEuKJhsjztRqoxLZcDLxRG0mtnjj1p8UCl84bl0im1yrQKn1bEjwxOY3K9BccaGl4ym4L3mRjYPWAnfYy9lUF0PGRnLPc/dDVj1arU6CCHAqoureQRZhQRtwlQoEkId/kiMPlKNVZPXDgXPwz8C1h0t+yxYbh6NApdMCx9O3i+utTKUfPVqYtRAhJFdmjKVMg8/9saLP/7xx++/d4aUWle7EpeSxEeyIeAeagwPD64sLE5BsOigUquh1Cw3PyYe+ujeNNqJVPbw6w+2KbAGmwJsE/mZnnSPgfeQNbgclugbYbHtiIWxnpEy6XMfEFgH4AnuY/XRUlE2RQjX9vEj/ffdH+ck7J7ujsdN/N33YfPhu+9zT2xvb//+3bvPd4QlOmRUHBeiCaiW7MZoRg+NUBknByYWv/4ac4lQMEi9MjkKzcLgTudH/YDlxQ7wh55rM1UAaEoxQ7Cq1wfXcVUR0ZqQEoomHlEDBu5YDdQLLa6MvtP1zs+AdQA2Sx51sztKLp0kAbxUz/z55+bWxpbzu80tyGb4oY3Nre2NjQ3/u5ub3xUgIaMGkJqlCGhXkxoOxBxUyzg+MFBfWF5eJrSw5QBrNGZkWIdbX3qyQHogedvdKBM3UvXq+g9T9dogoFWrqxPlbD6lM9mlnNNu0iIB9aJrWoWtPiEf7Tx098MvAdZv++7fIedY3O5oqSQ5IbqP/9x4QLW16d/e2O7+cXMz/uHm5ivMU4fi3O9bWz++/saLv9/P/iu7hhU2aXnc8MzthsnJ4eryV18tQ7sWFshOiCUCK5bIvf8s2eXAGrjWh+82VfINlLEG64XVlTVfrZqaiWWTLCPmsBPKapI3ZhixRVA3hCYJztJmffUjwLpj38foIMdfjatfd7HkxDWB7p0/N/74ceP93NbG76rfN7dyv29sbr/77ndP2be3tv746P03X3fqdrJFBBKEmNzZhehBi+33jFY1Pj4+Mvj1l18tQ75ewMKR8SSBFTG98nGIDJsYnPc80sahHFOv5te/bpC6X2MKRliI4GLVb3MKHo7GMiToFV4d9cHgRVe09Z1fAesAuCzIpRZUB6KS/pG7pVHAevONjY+CmxvfMdub21TnGx88vb258W58a3vL8doL6LRSoq4mLvwqx6pkCENwkrNT54uNzkwPfgUBrZXB2sgLecAKqZ5515uEaunijz5/SDNWzc8trOerVWjYerq2lk2nKDGH/CgqeshjdF6vSqdWg9UQ527T97/7668/73tIqshVGT1KKaXiS9t//Lj1558dHX/+/vjGxvvC1ubvljdffVX6Y3PjwQfhu95/77s/3tHIx+QeL+UHESbHIN5gqKHY0vTw1JdfEltcwNXrYcBKRNi3XuQjmpAx8+Dbz94f8S0CkUwqX6v3xJBBG60Yb7IV3SKnbTf4UKjRoiU/ZKDFeJf5zQ9//vXnu/Y9ymqqll9PdIsTXK9/8MZLv/+x9WZ8a3P7982NV+7e2Nj8Y3v7D/+TP773yitvPnGPg27unKT2lnzvPFEgiCaSjPPszPTAxFcKrZVqeVaGFXn0RWuIDXkeePudp+/3pSeqybkVAqyAHwhHNXbs/XNHBbv8qjuKOe2UjrR10fr+x+97+tZffz0gVohbnm4LoeUuCiYel/Ik73EEw53hsGQNYo1OVEBxnoTuJFvjOHR3gxYyEkrlpXZfq8MPu4ClmoLdpApNj4x9PT9PaC0Mjs0gj8b6medepF9LpjTdHU+81baa9C2uZidAamo9vxpI97CMs1gkezc8PKUi60UMFGUYYiNGe+c9jkff/hVmeGAW+ByXsSi4sDW0JCE2dVoZDmIV5TfeTaadOw2IUrrh1UOYTvFxMVYXAi35a5JEp0cjiLy3MTK8OD8/D+X6empiDpqFYbr7PuQKOA056eFng2uo+1WTM1Pr6Ur1BZRHjUgaJETGgklLtbf7Ql6fCrFWAteyrU9pw4/9AlYH4ixUDsSbWuXeBBhCEUGEHEUISqGrmQURWs1skSF1QU7N8imqHR5M5+VjLB2iyPZo0YCpJsrD4qqrOi/TWl6pLckhfOrhdwUE8iHK/+qrlrVaz+zUarpSD/gaeSxssRfxO+dyopUh3h3xKLJNrDrw0sWHzNqOx2699defD0BEuiOnxJUeIShXNFpCsihJe7xAC185WVTSRagbcPE0x7J8gkIlk2r3chGjZ0jFOJEniZq5kYE6VpZ9C0tcqDcwkYMQvusdbSHC6uz9Tz/hnq2vZsfqyZnBOWSOMRXuvUpFh9NpJa6QDYUwckhrfDHWw9z9gbO164tfbv31oLh3IkddmWn1+2GKsnJFizIr6Z+0oFwQpdal1G5MRh/XTqn4IVabQJoNx8+IVop3mjwUYE0AFqG1XB1XYD3+soeFv2t74+0HhexaPRCCasWQY7Oc0+FACiFYrRyoa1jEYjqeBjKm1dL/kCd+z08//fLrQXHvshwTlpuq9MDlJrYoQZxN7RLxteMj48JaZGKNIZyEwBPh2CFeJeuYNkUxXoaReM7J+KYHKl9iEx5oLQ9OJwErlep6RW/Sqm0P3ffg86Z0rLKUnw0UkrA0O/ohyU4lkSEtPCoWI+U4LQyhBMvZHu9H/9s3P/30060H6tXfI87GtHtQ8VygRSoRMi4JuJwKL1GhpTR0aRm1hgtxFJDRISak4dUYr2MYp5YxFU2icXq48tXnkG/nvyKw4OEP3/MGk0pFTJKn4zEN2RBSyAdiRiy8ACq9I5oTUWzQoQmcbIbCg9IhzP9qo2aKFV3ff//9Lze0HCg584qdrlni592gRXDlpB1rhKeXcXmUgxFfiqdNrJrzcogcONrLhNR2sr/GjnWjhuny2PJnMq0vBxUzTDzwdgzTJgmP9MgDCNDJE/e0VSIrld0IGgTRCvDtBuzHjflw2GJfWczIWzIhLfXZF198f+eBUizIsW3d3b0El0KLaBfZ3isB2Z5+iXaIQgs2Z1CbtIxMLMZR5LEck13gPO5SSQVYX38G+fxzwJI1K9HxrLcH16yM+YOgSbbuYskP00e3e64oCRyDSARpDgkatByMMBHDok+/jp365NNPfrqt5aDJ2eZ4XKYl4yLa5XaXgKupXc3ac7OjC8IzWo4KWdU6D8/rFGIMi31OAqPXjZfLC2AFWvODOA17YICvP+bDPSsVf/5BwRbEygYLfp+4qxd/MEWJ6BXqrj6YoJEXrbSX7NKiXU8IEe1n33zzyZ0HZkfirpxwOQYjmsplcci4yMkIXrI492jBGvEXS2mHrNAstChZh9oZiuNxUpYkj+Rw8ATWNxACa4kEpSnvgx2BUETteO6tx0VXPIhNU/q4Cx9/MZqzMjyK7mTLXcCL5iK7MYGzUCU9ck8otgzgn1zQcvDk9HvDWGfU3UuUS4lRZefVBCbtxKqKcnlJiMp7vKglY6kYDR2zsyqRNXkwONLKjQ+XFz795tNPvwGsORmW5lFzymdk/K4HDknmoCvci4fazFj9FkV+hOo9KlghbE6M6MSiRKj5DM5DD+h6KjDkb65tOYhySqcZuGRH3wpYoAVcCq9ScReYol+cqNIxBjuZBfCEGBCjcEJamWhJivr9pgaBBfnms/nqLIH1Av+oE0NBXo7HZFi422y+1+wisUqRdGGhgMX6gAr7RaSMoPKhhcRgOtTP9VAIPj6/5uiWgyhHXt+JGSWCKxjcibpsu+qlJEIyLeByCgi4tAJLMWorj/zbilNxSFBxgh8dWdbGwPDXn3zyCYFVHy0AVo/zqXZAQ4XvPuToYTK8GW7Vu3OiwJHCqM+bQCwWUomWDE+2CHvp7ntKKS+y8W8/O4hGSOToy+81mxVbzAQVVw9gclgPYFAuiYggEF5ORiOwDIZ/aJGl+CE7j8DebiqWHHivyIpS/PIXCqyJw0miWf5D2APvU5nM93gymTiZhcqgnO20y/v02RBZRBZSeXCz7wsEMGOR67KlUtX5L+c/v7jloMpJXRhulm2xt+np99RLUTDZGLHx0aAVGXx0KnFIHsQTWS3DChSnD7r0YaJZXxJYn372ZRlrSFF1CPsDZFmk/qFWu781g7d5MjYHurA8tIZ4qxRZvUlJ5la7IZGgfaw2Y0v0/IAaz/xZB+8k3JVLuu6WZ+DkyS7gkqNUItAuG6GlOHv8bwomWhhCzCVS9naVB/6e8XBoxMY0ZdxlakwOz38PWth5N0IUKzDUZkpgVyl/78MevcXvcKALomQT7PBXPoIKEtFK/jBWjAQMGaeBs8aS68tfL3/1+ZktB1j+Zu/aXpqMw7Bl2Uk6LCuyogMWJUUH6KryoiDoH4humtu+7du+uaNz5zXnWrZyLSvXNo05IbLIi2jESBxIkIiOui9NzTykSd4IXfa8+77NgoqgIFc9Y0O8fHje93vf9/f7nndt03WiS8j0mbKL50soJvji3gWbeztjVnLiq2qZEfMuRi2Rm1gTo6yxRPV1TG/66duPExMga/pNxrJVqXd4YYFrv2JQ4gGojllxawBZD09BylYQn0/istRbVR63X972qE7mb5EOTA9Mv/7zNpI/wqL1TdeJLgrG+nqk+ixdNUQXCOPZiulw2c+VNCnAl1osNyVNOh2i0njRYIG7qeZlR2IkQ9bbx88aiCyrIUIvmqiqOAWKfM5OTSauyLBaL3yW6WCxkoteMkjIwZvR32sMtDhfvHs3MLWnYGGjsDR4HcCLzojFTJVqAwwAX0xkOsf7VondJA7bzUolR7ldLebg/cRyKpMeq1vNb54muoZ4svpbGsCVx8b4UZVrbXEdWUPQFJp2kdGeBncLPg55GMEp9yAaWXXI4HM7H8O4f/R4wULHElET9qfl1AW6qJDIJnuA2IqR73JMhum8WcepGCPLMZAMxxlqQ9er5Im+zkkMCyZgdpeOkLAk950s3G8V9yw4t2GxtALmR7AuBdx+uFZ7Neqaap2E/PS1KoU44HZ04r7EwMLnCgMIEfZc3ZpPXdQx5qIRdFUJpVe1XXERvbPGLDGqdWalwsS6mPvtl/SmsRfTU8NzpKyRUb5+11UmQQVruewLwPgdGqMlAyS5ALpGOIowOP9g8SK1V8PpHNBVJy5B5AVXOEgUxS9jLVhWXBSLQt3Fy0voG61GhTkZ1unCYqNC5pKaOLvLXlt3uZ7pG5gamYOwkN873ZSyHAxeE09q7dHknUCA0nkDBR+Z3pJRj1Qqr4SVsAesyRTmSp/7Vd/jzsfTGwryA9tFWAsWyqmrjtTV1kbyAmFVQDWQmUpwMZVKnQwrjS5GbZdZxdF4VJ0YHH2NIKTKYSZ9h8iqZAOYT4nNV4mkBvwLnwC+dBfJCecWDW9TzcrkjMYbeN+HC0n71xTkCw6LmtvbKRZh/pGlKxrl1QVx8VW90AZdNJticrtRFmM4F1cXujXW0zc4lAnCoQ/TzyLwxvfK3F4EoVkXQNwRWfQbIANhFq7nWi3GWFonFhixXhnOK8a6uro6ty7MhvB7bNEWZD51CbkL0SgkL6Gst+IDssIuNM8xMxcTIxDvPqzpTXdMElf0LBy/RrHm9KI39ijMtCElgGRFaz4CsIaHljJG8WAMOV8u9V81iqXjXf39fWsXzCnhT2FzKWxlMrFIfOkBqEuo6ufVRbGYmUfgcDaMU4crD5rGUJAOzRFXQyOD7gjGpD63j1yhXGGFXIuLhODH4XXgOiFldA/+YllagCRzVppr1GOJ/p6u8/kTggIKy1qDvLhA1yXK9HU8XZlCgi+7+DKC1IUZTgwRGX9U25tKjRJX6KInX5GwWiiLs9LozXa9ja7L04UujKwgJ28AiQrTeHxkHgdX3xgbTyR6Thbll6wyWFTeGidxUSxS7hLExSd64bmYHdcTU/i13Q3qetPpYSR3cDUzfjtyB2T5WYdHrrME72K9kf5C2IjD66usF8BuGYo/loURgj0K00Xsfzi5Np+y1RfYg/XtyPM8XfMdIz0Yc0UqdUDVF0EYfa/cre1NpwbnICsMSftp4QINsbzOio0lR41YJoJ11NFqHW3L0Dh9HprMIBqlcsZYVW+bTacS54rylCpgtehGEBsNs3QRW0JNnxtICA9GoNpquBkaT5Gwhomrrmu3IxGse3dW7C0pRGNQdPqUBP4WjEpOK4uSmDYgYbF+P5ZCYJnr7NPE2WVr8jAA57GkrDUeD0JdfNVFmeurIjU3jyBY9XFrquPl6NwwMDIL40hIyy89VpibxBYf2+FyqVBK+SAqB2oFrQOzZPbE0bPn9hVtX1yQ51i0E3trg7nUlQ1FoYoQSnrB7+JCuy3VkXpCMTg08777NuymWxwVX7v8rlt9pEzUpK8LhvSWtiqrXVKxZVvxiiUL6NrHL+FwaWuzwFYol7hy/XVWXUSYPjoGc4sPEx8mJkafd8OStGFvSfE35LJu86FdO4+Ul5cfX7pmRd7L6VviQuaiKgKRSMZr2Vj8cnxT3zaWTve+/gh7ydnubgRhxaaCfxCb18MtmcSFDeVfiYsvuvhobDTAMqV36tOnj5AVrLnZ03+ZaH4aq0tbhYKeyCK2eLoa27LBWGuFb9HLmU/DFh9kFak4vbLgn8WiDaU3mptyvTXRxcuL1EWL62dBVc/MpAZMOU4dK/5XVZWjq+xmMxKXUJ8CuTIi2lg1DqO1s7tX7d17umTTyryuln4XXWt2i5qD7aEMW0Cm/yHYZlOgqmihXaL60yjcsF7UFGy/DL4I9GCMGp50pE+uWvq3lEq/FYu3Ly0vKxXtB0QHDxw4c/bcqpLi5QX/8bmdOiYCAABhIHbXCf+KAQHMLMlQB/37kamR7CgUAAAAAAAA/GrlFdDo26JYPAAAAABJRU5ErkJggg==");



document.querySelector( "#retrobg-sun" ).onclick = () => {
	document.querySelector( "#retrobg" ).classList.toggle( "retrobg-shutdown" );
};
