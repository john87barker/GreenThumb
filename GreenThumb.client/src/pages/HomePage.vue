<template>
  <div class="container-fluid">
    <div class="row home flex-grow-1 d-flex flex-column align-items-end justify-content-center my-5 mt-auto">
      <!-- <div>
      <h1 class="col-md-12 my-5 bg-dark text-light p-3 rounded d-flex align-items-start">
        <span class="mx-2 text-primary">Green Thumb</span>
      </h1>
    </div> -->
      <div class="col-md-12 px-5">
        <div class="row mt-5">
          <div class="col-md-6">
          </div>
          <div class="col-md-4 offset-1 abs right">
            <img class=" shadow border-top border-left rounded" src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2FyZGVuaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 offset-1 abs left">
            <img class="shadow border-top border-left rounded" src="https://images.unsplash.com/photo-1581578017306-7334b15283df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FyZGVuaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
          </div>
          <div class="col-md-6">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
          </div>
          <div class="col-md-6">
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-12">
          </div>
        </div>
        <div class="row abs bottom-right">
          <div class="col-md-6">
          </div>
          <div class="col-md-6 card p-3 pr ">
            <div class="d-flex justify-content-around">
              <img src="../assets/img/sprout.png" alt="sprout" class="">
              <h4>Title</h4>
              <img src="../assets/img/sprout.png" alt="sprout" class="">
            </div>
            <div class="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate similique temporibus assumenda ipsa voluptas placeat, fugiat illum alias aperiam doloremque sapiente, nihil illo consequuntur dolores ducimus commodi exercitationem nemo a.
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-outline-primary m-1 ">
                  More Articles...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
.abs{
  position: absolute;
}
.abs.right{
  top: 80px;
  right: 200px;
  width: 100%;
  height: 100%;
}
.abs.left{
  top: 100px;
  left: 5px;
  width: 100px;
  height: 200px;
}
.abs.bottom-right{
  top: 600px;
  right: 200px;
  width: 70%;
  height: 100%;
}
</style>
