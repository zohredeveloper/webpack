<template>
<div>
  <div class="contact-box">
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" class="validate">
            <label for="icon_prefix">Name</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">phone</i>
            <input id="icon_telephone" type="tel" class="validate">
            <label for="icon_telephone">Telephone</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input id="icon_email" type="email" class="validate">
            <label for="icon_email">Email</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">edit</i>
            <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
            <label for="icon_prefix2">Message</label>
          </div>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.brand-logo{
  margin-left: 25px;
}

.row {
  margin: 30px;
}

.contact-box {
  display: flex;
  justify-content: center;
}
</style>
