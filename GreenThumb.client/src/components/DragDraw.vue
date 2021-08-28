<template>
  <div class="dashboard text-light">
    <div class="navbar-tool">
      <i class="glyphicon glyphicon-cog"></i>
    </div>
    <div class="navbar open">
      <div class="navbar-content">
        <h4>Tiles</h4>
        <ul class="list-group" id="tiles">
        </ul>
        <hr>
        <form class="form" onsubmit="updateGrid(event)">
          <fieldset>
            <legend>Grid Settings</legend>
            <div class="form-group">
              <input placeholder="rows" class="form-control" type="text" name="grid-height">
            </div>
            <div class="form-group">
              <input placeholder="columns" type="text" name="grid-width">
            </div>
          </fieldset>
          <fieldset>
            <legend>Tile Settings</legend>
            <div class="form-group">
              <input placeholder="height" type="text" name="tile-height">
            </div>
            <div class="form-group">
              <input placeholder="width" type="text" name="tile-width">
            </div>
          </fieldset>
          <div class="">
            <button type="submit">
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="main-content pushed">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <img id="brush" height="64" src="" class="" alt="brush">
            <div id="grid" class="grid">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Component',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
html, body {
  background: url(https://www.getpaint.net/doc/latest/images/layerswindow/checkerboard.png);
}

#brush {
  position: absolute;
  z-index: 9999;
  transition: 0s;
  -webkit-user-select: none;
  pointer-events: none;
}

#brush:hover {
  cursor: crosshair;
}

.grid {
  outline: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  -webkit-user-select: none;
}

.cell {
  display: inline-block;
  margin: 0;
  padding: 0;
  height: 64px;
  width: 64px;
  background-size: cover;
}

.cell.empty {
  outline: 1px solid black;
  background: rgba(25, 25, 25, 0.3);
}

.navbar {
  width: 0;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  background: #161313;
  color: ghostwhite;
  transition: all .3s;
}

.navbar.open {
  width: 300px;
}

.navbar .navbar-content {
  width: 100%;
}

.navbar ul {
  list-style: none;
}

.navbar ul li.active {
  outline: 1px solid #ff00ff;
}

.navbar ul li img {
  height: 64px;
}

.navbar form input {
  background: transparent;
  color: #c1c1c1;
  outline: none;
  border: none;
  border-bottom: 1px solid #c1c1c1;
}

.navbar form button {
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #c1c1c1;
  transition: all .3s;
  color: #fff;
  margin: 1em;
  padding: 1em;
}

.navbar form button:hover {
  background: #c1c1c1;
  color: #fff;
}

.main-content {
  margin-left: 0;
}

.main-content.pushed {
  margin-left: 300px;
}

.centered {
  text-align: center;
}
</style>
