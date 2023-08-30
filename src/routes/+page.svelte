<script lang="ts">

    let aKey:string = 'foo'
    let aValue:string = ''

    let aResult:string = 'undefined'
    let inf:string = ""

    async function setKV() {
        const res = await fetch("api/setkv",{
            method:"post",
            headers: {
                "content-type":"application/json; charset=utf-8"
            },
            body: JSON.stringify({
                keyName: aKey,
                value: aValue
            })
        })
        
    }

    async function getKV() {
        const res = await fetch("api/getkv",{
            method:"post",
            headers: {
                "content-type":"application/json; charset=utf-8"
            },
            body: JSON.stringify({
                keyName: aKey
            })
        })


    }

    async function delKV() {
        const res = await fetch("api/delkv",{
            method:"post",
            headers: {
                "content-type":"application/json; charset=utf-8"
            },
            body: JSON.stringify({
                keyName: aKey
            })
        })


    }


</script>
<h1>Welcome to SvelteKit</h1>
<div>
    key: <input type="text" bind:value={aKey} />
    value: <input type="text" bind:value={aValue}/>
    <button type="button" on:click={async()=>{await setKV()} }> 设置</button>
 </div>
<div>
   key: <input type="text" bind:value={aKey} />
   value: <span>{aResult}</span>
   <button type="button" on:click={async()=>{await getKV()} }> 获取</button>
</div>

 <div>
    key: <input type="text" bind:value={aKey} />
    <button type="button" on:click={async()=>{await delKV()} }> 删除</button>
 </div>