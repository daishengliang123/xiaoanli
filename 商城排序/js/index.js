// ~ function () {
// 	let _DATA = null;

// 	/*第一步：从服务器获取数据（AJAX）*/
// 	let xhr = new XMLHttpRequest;
// 	xhr.open('GET', 'json/product.json', false);
// 	xhr.onreadystatechange = function () {
// 		if (xhr.status === 200 && xhr.readyState === 4) {
// 			_DATA = xhr.responseText;
// 		}
// 	}
// 	xhr.send();
// 	_DATA = JSON.parse(_DATA); //=>_DATA：获取的都是JSON字符串，我们要让其变为对象

// 	//=>第二步：把获取的数据绑定在页面中
// 	let htmlStr = ``;
// 	_DATA.forEach(item => {
// 		let {
// 			title,
// 			price,
// 			time,
// 			hot,
// 			img
// 		} = item;
// 		htmlStr += `<div class="card" 
// 					data-price="${price}"
// 					data-time="${time}"
// 					data-hot="${hot}">
// 			<img class="card-img-top" src="${img}" alt="">
// 			<div class="card-body">
// 				<h6 class="card-title">${title}</h6>
// 				<p class="card-text">价格：￥${price}</p>
// 				<p class="card-text">好评：${hot}</p>
// 				<p class="card-text"><small class="text-muted">上架时间：${time}</small></p>
// 			</div>
// 		</div>`;
// 	});
// 	let cardDeck = document.querySelector('.card-deck');
// 	cardDeck.innerHTML = htmlStr;

// 	//=>第三步：点击实现升降序排序
// 	let navList = document.querySelectorAll('.navbar-nav li'),
// 		cardList = cardDeck.querySelectorAll('.card');

// 	//循环给所有的按钮绑定点击事件，点击的时候按照指定的规则排序
// 	for (let i = 0; i < navList.length; i++) {
// 		let item = navList[i];
// 		item['data-type'] = -1; //=>控制升降序
// 		item.onclick = function () {
// 			//=>点击当前的某个按钮，让其按照升降序切换，而其余的都应该回归原始-1
// 			[].forEach.call(navList, item => (item === this ? this['data-type'] *= -1 : item['data-type'] = -1));
// 			cardList = [].slice.call(cardList, 0);
// 			cardList.sort((next, cur) => {
// 				//获取当前按钮记录的排序方式 data-time / data-price / data-hot
// 				let pai = this.getAttribute('data-pai');
// 				cur = cur.getAttribute(pai);
// 				next = next.getAttribute(pai);
// 				if (pai === "data-time") {
// 					//获取的是日期数据：我们要把字符串中的“-”给去掉
// 					cur = cur.replace(/-/g, '');
// 					next = next.replace(/-/g, '');
// 				}
// 				return (next - cur) * this['data-type'];
// 			});
// 			cardList.forEach(item => cardDeck.appendChild(item));
// 		}
// 	}



// 	/*
// 		//给价格按钮绑定点击事件
// 		//给按钮设置一个自定义属性DATA-TYPE存储排序方式：-1降序 1升序
// 		navList[1]['data-type'] = -1;
// 		navList[1].onclick = function () {
// 			//控制升降序切换
// 			this['data-type'] *= -1;
// 			//把元素集合转换为数组，让其按照价格进行排序
// 			cardList = Array.prototype.slice.call(cardList, 0);
// 			cardList.sort((next, cur) => {
// 				//绑定数据的时候，把产品价格信息设置为元素的自定义属性，需要的时候获取
// 				cur = cur.getAttribute('data-price');
// 				next = next.getAttribute('data-price');
// 				return (next - cur) * this['data-type'];
// 			});
// 			//循环数组中的每一项,让其按照最新的顺序依次添加到页面中，完成页面排序
// 			cardList.forEach(item => cardDeck.appendChild(item));
// 		}

// 		navList[2]['data-type'] = -1;
// 		navList[2].onclick = function () {
// 			//控制升降序切换
// 			this['data-type'] *= -1;
// 			//把元素集合转换为数组，让其按照价格进行排序
// 			cardList = Array.prototype.slice.call(cardList, 0);
// 			cardList.sort((next, cur) => {
// 				//绑定数据的时候，把产品价格信息设置为元素的自定义属性，需要的时候获取
// 				cur = cur.getAttribute('data-hot');
// 				next = next.getAttribute('data-hot');
// 				return (next - cur) * this['data-type'];
// 			});
// 			//循环数组中的每一项,让其按照最新的顺序依次添加到页面中，完成页面排序
// 			cardList.forEach(item => cardDeck.appendChild(item));
// 		} */
// }();

~ function () {
	let Data = null;
	//接受数据
	let xhr = new XMLHttpRequest;
	xhr.open('GET', 'json/product.json', false);
	xhr.onreadystatechange = function () {
		if (xhr.status === 200 && xhr.readyState === 4) {
			Data = xhr.responseText;
		}
	}
	xhr.send();
	// Data刚开始是一个json字符串要转化为对象
	Data = JSON.parse(Data)
	console.log(Data)


	// 拼接字符串
	let htmlStr = ``;
	Data.forEach(item => {
		let {
			hot,
			img,
			price,
			time,
			title
		} = item;
		htmlStr += `<div class="card"
		data-price = "${price}"
		data-time = "${time}"
		data-hot = "${hot}">
	  <img class="card-img-top" src="${img}" alt="">
	  <div class="card-body">
		  <h6 class="card-title">${title}</h6>
		  <p class="card-text">价格：￥${price}</p>
		  <p class="card-text">好评：${hot}</p>
		  <p class="card-text"><small class="text-muted">上架时间：${time}</small></p>
	  </div>
  </div>`
	})
	let carddeck = document.querySelector('.card-deck');
	carddeck.innerHTML = htmlStr;
//  把屏接好的字符串放到这个盒子里


// 要操作谁就先获取谁
	let navlist = document.querySelectorAll('.nav-item');
	let cardlist = document.querySelectorAll('.card')
	console.log(navlist);
	console.log(cardlist)

	for (let i = 0; i < navlist.length; i++) {
		let item = navlist[i];
		item['data-type'] = -1;
		// 控制升降
		item.onclick = function () {
			[].forEach.call(navlist, item => (item === this ? this['data-type'] *= -1 : item['data-type'] = -1));
			// 点击当前的某个按钮，让其按照升降序切换，而其余的都应该回归原始-1
			cardlist = [...cardlist];
			// 转化数组
			cardlist.sort((next, cur) => {
				// 通过cardlist的time price hot来排序用一个自定义属性接受

				let pai = this.getAttribute('data-pai');
				cur = cur.getAttribute(pai);
				next = next.getAttribute(pai);
					//获取的是日期数据：我们要把字符串中的“-”给去掉
				if (pai === 'data-time') {
					cur = cur.replace(/-/g, '')
					next = next.replace(/-/g,'');
				}
				return (next - cur) * this['data-type']
				// 排序恢复
			})
			cardlist.forEach(item=>{
				carddeck.appendChild(item)
			})
		}
	}

}()