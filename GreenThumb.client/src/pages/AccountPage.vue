<template>
  <div class="container-fluid about text-center text-light ">
    <div class="row m-0">
      <div class="col-md-1 d-none-sm"></div>
      <div class="col-md-10 my-5 rounded border shadow d-flex flex-column align-items-center">
        <h1 class="text-capitalize">
          Welcome {{ account.name }} !
          <!-- Welcome {{ account.name.split("@")[0] }} ! -->
        </h1>
        <img class="rounded-circle shadow pimg" :src="account.picture" alt="" />
        <h6>{{ account.email }}</h6>
        <img class="rounded coverImg shadow pimg" :src="account.coverImg" alt="" />
        <h4>{{ account.bio }}</h4>
        <div class="ml-auto action" data-toggle="modal" data-target="#edit-account">
          <span>✏ Edit Account</span>
        </div>
      </div>
    </div>
    <img class=" shadow border-top border-left rounded mb-3 bimg" src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2FyZGVuaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Seedlings" width="501" height="334">
    <div class="col-md-1 d-none-sm"></div>
  </div>
  <!-- Modal -->
  <div class="modal fade"
       id="edit-account"
       tabindex="-1"
       role="dialog"
       aria-labelledby="edit-account"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Edit My Account
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editAccount">
            <div class="form-group">
              <label class="pr-2" for="bio">Bio</label>
              <textarea type="text"
                        id="bio"
                        class="form-control"
                        placeholder="About myself..."
                        v-model="state.editedAccount.bio"
              ></textarea>
            </div>
            <div class="form-group">
              <label class="pr-2" for="imgUrl">Cover Image</label>
              <input type="text"
                     id="imgUrl"
                     class="form-control"
                     placeholder="Image Url..."
                     v-model="state.editedAccount.coverImg"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="name">Name</label>
              <input type="text"
                     id="name"
                     class="form-control"
                     placeholder="Name..."
                     v-model="state.editedAccount.name"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="picture">Picture</label>
              <input type="text"
                     id="picture"
                     class="form-control"
                     placeholder="Your profile picture..."
                     v-model="state.editedAccount.picture"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="email">Email Address</label>
              <input type="text"
                     id="email"
                     class="form-control"
                     placeholder="Your email address..."
                     v-model="state.editedAccount.email"
              >
            </div>

            <div>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- // NOTE  do not need a v-if for this because this is only shwoing if you are logged in (account page) -->
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
import { logger } from '../utils/Logger'
import $ from 'jquery'

export default {
  name: 'Account',
  setup() {
    const state = reactive({
      editedAccount: {
        bio: '',
        coverImg: '',
        picture: '',
        name: '',
        email: ''
      }
    })
    return {
      state,
      account: computed(() => AppState.account),
      async editAccount() {
        try {
          await accountService.editAccount(state.editedAccount)
          $('#edit-account').modal('hide')
        } catch (error) {
          logger.log(error)
        }
      }
    }
  }
}
</script>

<style scoped>
.pimg {
  max-width: 100px;
}
@media (min-width: 601px) {
 .bimg { max-width: 90vw; }
}
@media (max-width: 600px) {
 .bimg { display: none; }
}

.coverImg {
  max-width: 350px;
}
</style>
