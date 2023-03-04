const template = require('template_js');
const str = `<span><%=name%></span>`;
const str1 = `
<span>
    <%if (win) {%> 胜利 <%} else {%> 失败 <% } %> 
</span>`
console.log(template(str, { name: 'guo' }));
console.log(template(str1, { win: true }));
console.log(template(str1, { win: false }));
console.error('失败')
console.warn('警告')
console.info('提示')
console.log('普通')