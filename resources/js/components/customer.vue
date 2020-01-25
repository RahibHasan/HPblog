<template>
   <div>
   <breadcrumb />
         <div class="card">
            <div class="card-header">
              <h3 class="card-title">Customer List</h3>

              <div>

              
              <a class="btn btn-app" data-toggle="modal" data-target="#modal-default" style='float:right'><i class="fas fa-plus"></i> Add</a>

              </div>


              <!-- Add Form -->
              <form action="/api/customer" method='post' @submit.prevent="addCustomer()">

              <!-- /.Customer Insert Table Desgin -->
               <div class="modal fade" id="modal-default">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Customer (Add)</h4>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    

                    <div class="modal-body">
                        
                       
                          <div class="row">
                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Customer Name </label>
                                    <input type="text" class="form-control" v-model='customer_name' name='customer_name'  placeholder="Enter ...">
                                  </div>
                                </div>

                                <div class="col-sm-6">
                                  
                                </div>


                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Customer Email </label>
                                    <div class="input-group mb-3">
                                          <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                          </div>
                                          <input name='customer_email' v-model='customer_email' type="email" class="form-control" placeholder="Email">
                                        </div>
                                  </div>
                                </div>



                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Customer Password </label>
                                    <input name='customer_password' v-model='customer_password' type="password" class="form-control" placeholder="">
                                  </div>
                                </div>



                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Customer Address </label>
                                    <textarea name='customer_address' v-model='customer_address' class="form-control" rows="3" placeholder="Enter ..."></textarea>
                                  </div>
                                </div>

                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Customer City </label>
                                    <input name='customer_city' type="text" v-model='customer_city' class="form-control" placeholder="Enter City...">
                                  </div>
                                </div>



                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Zip Code </label>
                                    
                                      <input name='zip_code'  type="number" v-model='customer_zip_code' class="form-control">
                                    
                                  </div>
                                </div>


                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Mobile Number</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="fas fa-phone"></i></span>
                                        </div>
                                        <input name='customer_mobile_number' v-model='customer_phone_no' type="text" class="form-control" data-inputmask="&quot;mask&quot;: &quot;(+880) 17-51783698&quot;" data-mask="" im-insert="true">
                                      </div>
                                  </div>
                                </div>


                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Contact Person </label>
                                    
                                      <input name='contact_person' v-model='customer_contact_person' type="text" class="form-control">
                                    
                                  </div>
                                </div>

                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Contact Person Mobile Number</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="fas fa-phone"></i></span>
                                        </div>
                                        <input name='contact_person_mobile' v-model='customer_person_phone' type="text" class="form-control" data-inputmask="&quot;mask&quot;: &quot;(+880) 17-51783698&quot;" data-mask="" im-insert="true">
                                      </div>
                                  </div>
                                </div>

                          </div>
                        


                    </div>
                    









                    <div class="modal-footer justify-content-between">
                      <button type="button" class="btn btn-sm bg-gradient-danger btn-flat" data-dismiss="modal">Back To List</button>



                      <button type="submit" class="btn btn-sm bg-gradient-success btn-flat">Success</button>
                    </div>
                  </div>
                  <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
              </div>
              <!-- /.Customer Insert Table Desgin -->

              </form>











              <form action="/api/customer" method='post' @submit.prevent="update_customer()">

              <!-- /.Customer Insert Table Desgin -->
               <div class="modal fade" id="modal-default-edit">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Customer (EDIT)</h4>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    

                    <div class="modal-body">
                        
                       
                          <div class="row">
                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Customer Name </label>
                                    <input type="text" class="form-control" v-model='CustomerEdit.customer_name' name='customer_name'  placeholder="Enter ...">
                                  </div>
                                </div>

                                <div class="col-sm-6">
                                  
                                </div>


                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Customer Email </label>
                                    <div class="input-group mb-3">
                                          <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                          </div>
                                          <input name='edit_customer_email' v-model='CustomerEdit.customer_email' type="email" class="form-control" placeholder="Email">
                                        </div>
                                  </div>
                                </div>



                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Customer Password </label>
                                    <input name='edit_customer_password' v-model='CustomerEdit.customer_password' type="password" class="form-control" placeholder="">
                                  </div>
                                </div>



                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Customer Address </label>
                                    <textarea name='customer_address' v-model='CustomerEdit.customer_address' class="form-control" rows="3" placeholder="Enter ..."></textarea>
                                  </div>
                                </div>

                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Customer City </label>
                                    <input name='customer_city' type="text" v-model='CustomerEdit.customer_city' class="form-control" placeholder="Enter City...">
                                  </div>
                                </div>



                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Zip Code </label>
                                    
                                      <input name='zip_code'  type="number" v-model='CustomerEdit.customer_zip_code' class="form-control">
                                    
                                  </div>
                                </div>


                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Mobile Number</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="fas fa-phone"></i></span>
                                        </div>
                                        <input name='edit_customer_mobile_number' v-model='CustomerEdit.customer_phone_no' type="text" class="form-control" data-inputmask="&quot;mask&quot;: &quot;(+880) 17-51783698&quot;" data-mask="" im-insert="true">
                                      </div>
                                  </div>
                                </div>


                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Contact Person </label>
                                    
                                      <input name='contact_person' v-model='CustomerEdit.customer_contact_person' type="text" class="form-control">
                                    
                                  </div>
                                </div>

                                <div class="col-sm-6">
                                  <!-- text input -->
                                  <div class="form-group">
                                    <label>Contact Person Mobile Number</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text"><i class="fas fa-phone"></i></span>
                                        </div>
                                        <input name='contact_person_mobile' v-model='CustomerEdit.customer_person_phone' type="text" class="form-control" data-inputmask="&quot;mask&quot;: &quot;(+880) 17-51783698&quot;" data-mask="" im-insert="true">
                                      </div>
                                  </div>
                                </div>

                          </div>
                        


                    </div>
                    


                    <!-- Edit Form -->
                    






                    <div class="modal-footer justify-content-between">
                      <button type="button" class="btn btn-sm bg-gradient-danger btn-flat" data-dismiss="modal">Back To List</button>



                      <button type="submit" class="btn btn-sm bg-gradient-success btn-flat">Success</button>
                    </div>
                  </div>
                  <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
              </div>
              <!-- /.Customer Insert Table Desgin -->

              </form>































            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Customer ID</th>
                  <th>Customer Name</th>
                  <th>Customer Email</th>
                  <th>Customer Phone</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(value,index) in customer_list.data"> 
                  <td>{{value.customer_id}}</td>
                  <td>{{value.customer_name}}</td>
                  <td>{{value.customer_email}}</td>
                  <td>{{value.customer_phone_no}}</td>
                  <td>
                    <button type="button" @click="Editcustomer(value.customer_id)"  data-toggle="modal" data-target="#modal-default-edit" class="btn btn-block btn-outline-primary btn-flat">Edit</button>

                   
                    <button type="button" class="btn btn-block btn-outline-danger btn-flat">Delete</button>
                  </td>
                 
                </tr>
                </tbody>
                <pagination :data="customer_list"  :limit=3  @pagination-change-page="getcustomer">
                  <span slot="prev-nav">&lt; Previous</span>
                  <span slot="next-nav">Next &gt;</span>
              </pagination>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
   </div>
</template>

<script>
    export default {

        props:['name'],
        mounted:function()
        {
          this.getcustomer();
        },
        data()
        {
          return{
              customer_name:'',
              customer_email:'',
              customer_password:'',
              customer_address:'',
              customer_city:'',
              customer_zip_code:'',
              customer_phone_no:'',
              customer_contact_person:'',
              customer_person_phone:'',
              customer_list:{},
              CustomerEdit:{
                customer_name:'',
                customer_email:'',
                customer_password:'',
                customer_address:'',
                customer_city:'',
                customer_zip_code:'',
                customer_phone_no:'',
                customer_contact_person:'',
                customer_person_phone:'',
              },
                


            
          }
        },
        created:function()
        {
          
        },
      
        methods:{
          update_customer:function()
          {

            const _this = this;
            console.log(_this.CustomerEdit);
             axios.put('/customer/'+_this.CustomerEdit.customer_id,_this.CustomerEdit)
              .then(function (response) {
              console.log(response);
                if(response.status =200)
                {
                  Toast.fire({
                    type: 'success',
                    title: 'Great succesfully Edit new customer.',
                  });
                  _this.getcustomer()
                }
              })
              .catch(function (error) {
                  toastr.error(error);
              });

          },
          Editcustomer:function(id)
          {
            const _this=this;
            axios.get('/customer/'+id).then(function(response){
              _this.CustomerEdit=response.data;
              if(response.status=200)
              {
                
                _this.CustomerEdit.customer_name=response.data.customer_name;
                _this.CustomerEdit.customer_email=response.data.customer_email;
                _this.CustomerEdit.customer_password=response.data.customer_password;
                _this.CustomerEdit.customer_city=response.data.customer_city;
                _this.CustomerEdit.customer_zip_code=response.data.customer_zip_code;
                _this.CustomerEdit.customer_phone_no=response.data.customer_phone_no;
                _this.CustomerEdit.customer_contact_person=response.data.customer_contact_person;
                _this.CustomerEdit.customer_person_phone=response.data.customer_person_phone;
                _this.CustomerEdit.customer_address=response.data.customer_address;
              }

            }).catch(function(error){
              toastr.error(error);
            });
          },
          getcustomer:function(page=1){
            const _this=this;
            axios.get('/customer/create?page=' + page).then(function(response){
              console.log(response);
              if(response.status=200)
              {
                
                _this.customer_list=response.data;
              }

            }).catch(function(error){
              toastr.error(error);
            });
          },



          resetForm:function() {
            var self = this;
            Object.keys(self._data).forEach(function(key,index) {
              console.log(key);
              self._data[key] = '';
            });
          },
          addCustomer:function(event){
              const _this=this;
             axios.post('/customer', {
                customer_name: this.customer_name,
                customer_email: this.customer_email,
                customer_password: this.customer_password,
                customer_address: this.customer_address,
                customer_city: this.customer_city,
                customer_zip_code: this.customer_zip_code,
                customer_phone_no: this.customer_phone_no,
                customer_contact_person: this.customer_contact_person,
                customer_person_phone: this.customer_person_phone,
                
              })
              .then(function (response) {
                if(response.status =200)
                {
                  Toast.fire({
                    type: 'success',
                    title: 'Great succesfully added new customer.',
                  });
                  _this.resetForm();
                  _this.getcustomer()
                }
              })
              .catch(function (error) {
                  toastr.error(error);
              });
          }
        }
    }
</script>
