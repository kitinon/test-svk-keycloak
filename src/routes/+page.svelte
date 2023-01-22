<script>
  export let data
  const { access_token, claims, login_path, logout_url } = data
  let loggedin = (access_token != null)
</script>

{#if loggedin}
  <a class="button-1" href={logout_url}>logout</a>
      <div class="column">
        <pre>{JSON.stringify(claims, null, 2)}</pre>
      </div>
  {:else}
  <a class="button-1" href={login_path}>login</a>
{/if}

<style>
.button-1 {
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  line-height: 15px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 7px 16px;
  margin-top: 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.button-1:hover,
.button-1:focus {
  background-color: #F082AC;
}

.column {
  margin-left: 2mm;
  line-break: anywhere;
  font-family: "Courier New", Courier, monospace;
  font-size: small;
}
</style>