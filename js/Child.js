window.onload = function () {
    // �e�E�B���h�E�̑��݃`�F�b�N
    console.log("open")
    if (!window.opener || window.opener.closed) {
        window.alert('�e�E�B���h�E������܂���B');
        return false;
    }
}