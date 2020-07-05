export const modalTemplate = (modalcontent) => `<style>
    .modaldiv {
        position: fixed;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 80%;
        height: 180px;
        margin: auto;
        text-align: center;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.8);
        border: #4a4 solid 5px;
        color: #4a4;
        font-family: monospace;
        font-size: 20px;
        border-radius: 50px;
    }
    button, textarea {
        font-family: monospace;
        background-color: #cfc;
        border-color: #4a4;
        border-width: 1px;
        color:#050;
        padding: 10px;
        font-size: 20px;
        
        border-radius: 4px;
        white-space: nowrap;
        
        margin: 2px;
        user-select: none;
    }
    textarea {
        width: 80%;
        height: 80px;
    }
</style>
<div class="modaldiv">
    ${modalcontent}
</div>`;