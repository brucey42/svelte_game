<script>
    let input = sessionStorage.getItem(`input`);
</script>

<div class="body">
    <nav>
        <a href="/" on:click={() => {
            sessionStorage.removeItem(`input`);
        }}>&nbsp;&nbsp;Main Menu&nbsp;&nbsp;</a>
        |
        <a href="/">&nbsp;&nbsp;Game&nbsp;&nbsp;</a>
        |
        <a href="/char">&nbsp;&nbsp;Character&nbsp;&nbsp;</a>
    </nav>
</div>