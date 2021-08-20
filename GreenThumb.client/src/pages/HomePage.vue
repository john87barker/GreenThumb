<template>
  <div class="row home flex-grow-1 d-flex flex-column align-items-end justify-content-center my-5 mt-auto">
    <!-- <div>
      <h1 class="col-md-12 my-5 bg-dark text-light p-3 rounded d-flex align-items-start">
        <span class="mx-2 text-primary">Green Thumb</span>
      </h1>
    </div> -->
    <div class="col-md-12">
      <div class="row mr-5">
        <div class="col-md-6">
        </div>
        <div class="col-md-6 card p-3 ">
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
</style>
