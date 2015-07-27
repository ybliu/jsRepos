/**
 * @author ybliu
 * @email 724470522@qq.com
 * 获取页面的相对大小，也就是在浏览器显示的大小
 * getViewPort();
 */
//网页上的每个元素，都有clientHeight和clientWidth属性，利用它们就可以得到网页的相对大小。这两个属性代表的大小，是指元素的内容部分再加上padding的大小，但是不包括border和滚动条占用的空间。
function getViewPort () {
	// body...
	if(document.compatMode=='BackCompat'){//IE6的quirks模式

		//返回一个对象
		return {
				width:document.body.clientWidth,
				height:document.body.clientHeight
		}
	}else{

		return{

			width:document.documentElement.clientWidth,
			height:document.documentElement.clentHeight
		}

	}
}

/**
 * @author ybliu
 * @email 724470522@qq.com
 * 获取页面的绝对大小,整个页面的大小
 * getPagearea();
 */
//document对象的scrollHeight和scrollWidth属性就是网页的绝对大小，意思就是滚动条滚过的所有长度和宽度。
function getPagearea () {
	// body...
	if(document.compatMode=='BackCompat'){//IE6的quirks模式

		//返回一个对象
		return {
				width:document.body.scrollWidth,
				height:document.body.scrollHeight
		}
	}else{

		return{

			width:document.documentElement.scrollWidth,
			height:document.documentElement.scrollHeight
		}

	}
}
//但是，这个函数有一个问题。前面说过，如果网页内容能够在浏览器窗口中全部显示，
//不出现滚动条，那么网页的绝对大小与相对大小应该相等，即 clientWidth和scrollWidth应该相等。
//但是实际上，不同浏览器有不同的处理，这两个值未必相等。所以，我们需要取它们之中较大的那个值，因此要对getPagearea()函数进行改写。/**
 /* @author ybliu
 * @email 724470522@qq.com
 * 获取页面的绝对大小
 * getPagearea();
 */
//document对象的scrollHeight和scrollWidth属性就是网页的绝对大小，意思就是滚动条滚过的所有长度和宽度。
function getPageareaM () {
	　if (document.compatMode == "BackCompat"){

　　　　　　return {
　　　　　　　　width: Math.max(document.body.scrollWidth,
　　　　　　　　　　　　　　　　document.body.clientWidth),
　　　　　　　　height: Math.max(document.body.scrollHeight,
　　　　　　　　　　　　　　　　document.body.clientHeight)
　　　　　　}
　　　　} else {

　　　　　　return {
　　　　　　　　width: Math.max(document.documentElement.scrollWidth,
　　　　　　　　　　　　　　　　document.documentElement.clientWidth),
　　　　　　　　height: Math.max(document.documentElement.scrollHeight,
　　　　　　　　　　　　　　　　document.documentElement.clientHeight)
　　　　　　}
　　　　}
}
/* @author ybliu
 * @email 724470522@qq.com
 * 获取网页元素的绝对位置
 * getElementLeft();
 * getElementTop();
 * 适用范围：由于在表格和iframe中，offsetParent对象未必等于父容器，所以上面的
 * 函数对于表格和iframe中的元素不适用。
 */
function getElementLeft(element){

	var actualLeft=element.offsetLeft;
	var currnet=element.offsetParent;
	while(currnet!=null)
	{
		actualLeft+=currnet.offsetLeft;
		currnet=currnet.offsetParent;
	}

return actualLeft;

}
function getElementTop(element){

	var actualTop=element.offsetTop;
	var currnet=element.offsetParent;
	while(currnet!=null)
	{
		actualTop+=currnet.offsetTop;
		currnet=currnet.offsetParent;
	}

return actualTop;

}
/* @author ybliu
 * @email 724470522@qq.com
 * 获取网页元素的相对位置
 * getElementViewLeft();
 * getElementViewTop();
 * 适用范围：由于在表格和iframe中，offsetParent对象未必等于父容器，所以上面的
 * 函数对于表格和iframe中的元素不适用。
 */
//有了某个元素的绝对位置以后，获得相对位置就很容易了，
//只要将绝对坐标减去滚动条滚动的距离就可以了。
//滚动条滚动的垂直距离，是document对象的scrollTop属性；滚动条滚动的水平距离是document对象的scrollLeft属性。
function getElementViewLeft(element){

		var actualLeft=element.offsetLeft;
		var currnet=element.offsetParent;
		while(currnet!=null)
		{
			actualLeft+=currnet.offsetLeft;
			currnet=currnet.offsetParent;
		}
		　if (document.compatMode == "BackCompat"){
　　　　　　var elementScrollLeft=document.body.scrollLeft;
　　　　} else {
　　　　　　var elementScrollLeft=document.documentElement.scrollLeft; 
　　　　}
　　　　return actualLeft-elementScrollLeft;

}

function getElementViewTop(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;
　　　　while (current !== null){
　　　　　　actualTop += current. offsetTop;
　　　　　　current = current.offsetParent;
　　　　}
　　　　 if (document.compatMode == "BackCompat"){
　　　　　　var elementScrollTop=document.body.scrollTop;
　　　　} else {
　　　　　　var elementScrollTop=document.documentElement.scrollTop; 
　　　　}
　　　　return actualTop-elementScrollTop;
　　}
