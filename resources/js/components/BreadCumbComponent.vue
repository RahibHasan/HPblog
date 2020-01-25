<template>

	<div>
		<div class="content-header">
	      <div class="container-fluid">
	        <div class="row mb-2">
	          <div class="col-sm-6">
	            <h1 class="m-0 text-dark">Welcome To {{logged_user_name}}</h1>
	          </div><!-- /.col -->
	          <div class="col-sm-6">
	          	<div>
				    <ol class="breadcrumb float-sm-right">
				      <li class="breadcrumb-item" ><a href="">{{first_data}}</a></li>
				      <li class="breadcrumb-item active"><a href="">{{second_data}}</a></li>
				    </ol>
				</div>
	          </div><!-- /.col -->
	        </div><!-- /.row -->
	      </div><!-- /.container-fluid -->
	    </div>
		
	</div>
</template>
<script>
	export default{
		props:['name'],
		data()
		{
			return{
				first_data:'Dashboard',
				second_data:'',
				logged_user_name:[]
			}
		},
		created()
		{
			this.LoadingStatus();
			 //console.log(this.$route.meta.title);
			 this.second_data=this.$route.meta.title;
			 //this.second_data=this.breadcrumb;
			 axios.get('/profile')
		      .then(response => 
		      {
		      		this.logged_user_name=response.data.name;
		      })
		}
	}
</script>