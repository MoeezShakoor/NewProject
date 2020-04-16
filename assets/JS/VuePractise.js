Vue.component('product',{
	template:`
		<div>
			<div class="gridbox">	
				<div>
					<img :src="image" class="sockImage">
				</div>
				<div class="grid-2">
					<h2>{{itemName}}</h2>
					
					<br>
					<p v-if="Stock"> In Stock</p>
					<p v-else> Out of Stock</p>
					<ul>
						<li v-for="detail in details">{{detail}}</li>
					</ul>
					<div v-for="(variant,index) in variants" 
					:key="variant.variantID"
					class="colorbox"
					:style="{backgroundColor: variant.variantColor }"
					v-on:mouseover="updatecolor(index)">
					</div>

					<button v-on:click="addToCart">Add to cart</button>
					<button class="delbutton"  v-on:click="delFromCart">Delete</button>
					
				</div>
			</div>
			<hr />

			<div class="reviewbox">
			<h2>Reviews</h2>
			<br><br>
			<p v-if="!reviews.length"> there are no reviews</p>
			<ul>
				<li v-for="review in reviews">
				<p>{{review.name}}</p>
				<p>{{review.review}}</p>
				</li>
			</ul>
			</div>
			<hr />
			
			<product-review @reviewSumbit="addReview"></product-review>
			
		</div>
	`,
	data(){
		return {
			Name:'Socks',
			brand:'branded',
			// image:'./assets/Images/greenSocks.jpg',
			selectedIndex:0,
			reviews:[],
			cart: 0,
			details:["80% Cotton","20% polyester"],
			variants: [
			{
				variantID:1,
				variantColor:"green",
				inventory:10,
				variantImage:'./assets/Images/greenSocks.jpg'
				
			},
			{
				variantID:2,
				variantColor:"black",
				inventory:0,
				variantImage:'./assets/Images/blackSocks.jpg'			}
			]
		}
	} ,
	methods:{
		updatecolor(index){
			this.selectedIndex=index
		},
		addToCart(){
			this.$emit('add-to-cart')
		},
		delFromCart(){
			this.$emit('del-from-cart')
		},
		addReview(productreview){
			this.reviews.push(productreview)
		}
	},
	computed:{
		itemName(){
			return this.brand +' '+ this.Name
		},
		image(){
			return this.variants[this.selectedIndex].variantImage
		},
		Stock(){
			return this.variants[this.selectedIndex].inventory
		}
	}
	
})



Vue.component('product-review',{
	template:`
	<form class="formarea" @submit.prevent="onsubmit">
		<h3>Add a Review</h3>
		<hr />
		<p>
			<label for="name">name: </label>
			<input id="name" v-model="name">
		</p>
		<p>
			<label for="review">review: </label>
			<textarea id="review" v-model="review"></textarea>
		</p>
		<p>
			<input type="submit" value="submit">
		</p>
	</form>
	`,
	data(){
		return{
			name:null,
			review:null
		}
	},
	methods:{
		onsubmit(){
			let productreview={
				name: this.name,
				review: this.review
			}
			this.$emit('reviewSumbit',productreview)
			this.name=null
			this.review=null
		}
	}
})



var Socks = new Vue({
	el:'#Socks',
	data:{
		cart:0
	},
	methods:{
		updatecart(){
			this.cart +=1
		},
		delFromCart(){
			if(this.cart>0){
			this.cart -=1
			}
		}
	}
})