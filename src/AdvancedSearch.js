
function setupForm(formId,a,b,c,d) {
    document.getElementById(formId).addEventListener("submit", function(event) {
      event.preventDefault(); // 阻止默认的提交行为

      buildAndSubmitURL(a, b,c,d);
    });
  }

  function buildAndSubmitURL(a, b,c,d) {
   
    // 构建包含两个值的 URL
    var url = "https://www.google.com/search?as_q=" + document.getElementById(a).value + 
              "&as_epq=" + document.getElementById(b).value+
              "&as_oq=" + document.getElementById(c).value+
              "&as_eq=" + document.getElementById(d).value;

    // 重定向到构建好的 URL
    window.location.href = url;
  }

  // 初始化表单监听

  const forms = ["formA", "formB", "formC", "formD"];
 
  forms.forEach(function(formId, index) {
    setupForm(formId, "box-a", "box-b", "box-c", "box-d");
  });

