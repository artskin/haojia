<template>
  <h2>每日红包</h2>
  <div class="day-task flex">
    <div class="red-wrap flex space-between">
      <em>淘宝</em>
      <button class="btn" data-clipboard-text="0$uPMCfXieLzW$:// MU5183">
        <span>领取🧧</span>
      </button>
    </div>
    <div class="red-wrap flex space-between">
      <em>京东</em>
      <button class="btn" data-clipboard-text="15:/抢紅包，购痛快~最高11111元紅包等你来！￥B3s9E0ah6xBRMh5G￥ MF5681 ，⇴亰▾Dσδδng">
        <span>领取🧧</span>
      </button>
    </div>
    
  </div>
  <slot />
  <AbouMe>
  </AbouMe>
</template>
<script setup>
// import ClipboardJS from "clipboard"

//  const clipboard = new ClipboardJS('.btn');
//  clipboard.on('success', function(e) {
//     console.info('Text:', e.text);
//     //dialog.show();
//     e.clearSelection();
//   });
</script>

<style scoped lang="scss">
.day-task{
  background-color: rgb(250, 253, 255,0.7);
  padding: 8px;
  border-radius: 5px;
  h2{
    font-weight: normal;
    font-size: 14px;
    margin: 0;
    padding-left: .5em;
  }
  em{
    font-style: normal;
  }
}
.flex{
  justify-content: space-between;
}
.day-task{
  a,img{
    z-index: 1;
  }
  img{
    display: inline-block;
    background-color: #fff;
    border-radius: 50%;
  }
  a{
    display: inline-block;
    padding: 0 .5em;
    text-decoration: none;
    color: #aa3b28;
  }
  .red-wrap{
    width: calc(50% - 0.5em);
    text-align: center;
    padding: .5em 1em .5em 2em;
    border-radius: 5px;
    outline: 1px solid #df572e;
    position: relative;
    overflow: hidden;
    background-color: #df572e;
    font-size: 12px;
    color: #fff;
    position: relative;
    align-items: center;
    em{
      font-size: 18px;
    }
    button{
      z-index: 9;
      display: inline-block;
      background: linear-gradient(5deg, #ffaf8a 0%, #fdccab 40%, #fae7d6 100%);
      border-radius: 50px;
      padding: .2em .8em;
      font-size: 12px;
      color: #df572e;
      border: none;
    }
    
    &::after{
        content: " ";
        display: block;
        width: 160px;
        height: 160px;
        border-radius: 90px;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.99);
        /* background: linear-gradient(15deg, #df572e 0%, #df812e 40%, #df572e 100%); */
        right: -80px;
        z-index: 0;
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.43);
      }
  }
}

.quan{
  background-color: rgb(250, 253, 255,0.7);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #f8e041;
  dt{
    width: 70px;
    em{
      font-size: 32px;
    }
  }
  dd{
    margin-left: 0;
    padding:0 1em;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      display: block;
      
    }
  }
}
</style>
