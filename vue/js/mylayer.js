// 需要加载css：layer.css和layer.js
function PopAlert(content, time) {
    if (!time) {
        time = Math.ceil(content.length / 4);
        if (time == 0)
            time = 1;
    }

    layer.open({
        type : 3,
        content : content,
        style : "background-color:#000;color:#fff;",
        time : time,
        anim : 'scale',
        shade: 'background-color: rgba(0,0,0,.5)',
    });
}
/*笑脸弹出框*/
function PopGoodAlert(content, time) {
    if (!time) {
        time = Math.ceil(content.length / 4);
        if (time == 0)
            time = 1;
    }

    PopAlert(
        '<div style="margin-bottom:0.2em;text-align:center;height:2.5em;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA4CAYAAABOr/BaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAiRJREFUeNrsmt2NwjAMgAO6d7rBdYPLBtcNjtuAERihI3AblA0yQkbobVA2CBPkUsmI6lQSJ81PEbZk8dLG/mhiu3Y3Wmv2arJlLygETdAETdAETdBPIm8e19ZGG/hVRqXRvrD/DSgDXyT4ZpexInNoZbTT8yKNcsQasXVvdJjxRxltXfdjgHttF5UZ/KDd0i2B7jROFPxBqYFrjZc2BNrHwCjHDNCdhz/q0TpbR5DwDSo5AhdWdka5b8qqPR2qMkC/x/DJBq1WmGKvqYsT6blWjpwdxaet44ZfDwOnDNCdx7Xnh7vVES05RMHg9FAogltTKMaIC7wtUJHZwHtXsbRBNgbHKHiAlFFNtv+4pYeCdfd+kpbGrSwwR2BD3VCCJmiCJmiCJmiCJmiCJuhVQldQ0PMVMXDm25/zbLCryetbVeCV0taXF9DBZUub/beFxcx7q1gBdJdiwnGDViGThEKTjsG1C7EGmtARSoHRThPjSWMMiYxn3ObHKdaZjtabStwbQ8eY2IZVopkWd0xPvbJJqjZsjzlbyCDaImx5Ha3Uc2IJ14WMZFtEz12GxJKl3dAG2q47xAxKsvsnG/2/6UPN7p93jG3dD4TtH6PHEKdjtIBvpelXprLzCj14UfKFQ8HT+TZ6SQx8hh0hFq2SKI8OOq6ImOkw5YRjP9FdwP0XeKLRR0e5xjoNKIcY8DlzTnuA61nib9RolkXQBE3QBP2M8ifAAKvGrHzVAzv8AAAAAElFTkSuQmCC) no-repeat;background-size:contain;background-position:center;"></div><div style="min-width:8em;text-align:center">'
            + content + '</div>', time);
}

function PopBadAlert(content, time) {
    if (!time) {
        time = Math.ceil(content.length / 4);
        if (time == 0)
            time = 1;
    }

    PopAlert(
        '<div style="margin-bottom:0.2em;text-align:center;height:2.5em;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA4CAYAAAClmEtZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAiRJREFUeNrsmtFxwyAMQGNf/ssG9Qb1CB4hI3iDeoSMkBHoBh7B3YBs4G5AJqBwp9z5wwbhCEgb6U6XH4P1CEhCcmWMObyi1IcXFQZncAZncAb/T3KMfL6x2sGvtjpZVYUZOtAD2DKBbX5xCQxChVVp1mWy2iLnodST1XnFHm31HBqPhVbGLzozfG/CIh8FlwYnGhYpNXRj8HLeCx7zEidDBnAZYY/emqdGOI5YR5PDmWHlzWq7J5w1kUaJDODvFDaFwPUThuBbjgRmipwvR0wnsalGDLpGvOSSAVxGPPu1uWsRXrQF77g7dBTy7N7win1RCP5cIHPzwatQQlVF1Nycd+whnIjFUXDbey6Yp58WIctt6xFzHCouNjI4gzM4gzM4gzM4gzP4c8sx03sE5NMdVHXWKjsz6AR3gKRFkJS5+v1S4/Rjx/grXDZkkkVIVP6VhlYkzEtmJyWwu/RfTFohWwAq6G6jnZNCNEX9nuKMu0LEJ+K5n4XjWisAtgsHiCkhf0MRQuc+425rj8jtGdtXa2FcqNY37+3ZPQKtMpxHAfU8Td2wTAGtDH3ntIF2tE/61OBT4F9O2TEdAvBtKvBL4U5pqNSN3vaxXyCQbDMieOVxeIIKXHhWOTc0xteMofF1RN6tNnpTstAFS0Mcv23YSxrHlx/cqEL/9Nq2X57xPlXm5lZzgFZN6U+97jJAxtdjMzluITE4gzM4gzM4g/9d+RVgAFsBu2vK+fs2AAAAAElFTkSuQmCC) no-repeat;background-size:contain;background-position:center;"></div><div style="min-width:8em;text-align:center">'
            + content + '</div>', time);
}

var g_popdialog_scroll;

function PopDialog(v) {
    var title = v.title ? v.title : '';
    var content = v.content;
    var ybtn = v.ybtn ? v.ybtn : '确认';
    var width = v.width ? v.width : '80%';
    var onyes = v.onyes;

    if (v.scroll) {
        content = '<div id="_scroll"><div><ul><li style="list-style-type:none;">'
            + content + '</li></div></div>';
    }

    var mp = {
        content : content,
        anim : true,
        btn : [ '<span style="color:#ec6d65">' + ybtn + '</span>' ],
        yes : onyes,
        shadeClose : false
    };

    if (title)
        mp['title'] = [ title, 'background-color:#F7EADD' ];

    layer.open(mp);

    if (v.width) {
        $('.layermchild').css({ 
            'min-width' : v.width, 
            'max-width' : v.width
        });
    }

    if (v.height) {
        $('.layermcont').css({
            'min-height' : v.height,
            'max-height' : v.height
        });
    }

    if (v['max-height']) {
        $('.layermcont').css({
            'max-height' : v['max-height'],
            'overflow' : 'scroll'
        });
    }

    if (v.scroll) {
        g_popdialog_scroll = new iScroll('_scroll', {
            hScrollbar : false,
            vScrollbar : false
        });
        $('#_scroll').parent().css({
            'overflow' : 'hidden'
        });
    }
}

function PopConfirm(v) {
    var title = v.title ? v.title : '';
    var content = v.content;
    var ybtn = v.ybtn ? v.ybtn : '确认';
    var nbtn = v.nbtn ? v.nbtn : '取消';
    var onyes = v.onyes;
    var onno = v.onno;
    var width = v.width ? v.width : '80%';

    var mp = {
        content : content,
        btn : [ ybtn, nbtn ],
        yes : onyes,
        no : onno,
        shadeClose : true
    };

    mp['title'] = [ title, 'background-color:#fff' ];

    layer.open(mp);

    if (v.width) {
        $('.layermchild').css({
            'min-width' : v.width
        });
    }

    if (v['max-height']) {
        $('.layermcont').css({
            'max-height' : v['max-height'],
            'overflow' : 'scroll'
        });
    }

}
function startHtml(str) {
    GO_NEXT_APGE.show(str);
}

function closetHtml(index) {
    GO_NEXT_APGE.hide(index);
}

var GO_NEXT_APGE = {
    index : -1,
    show : function(html) {
        // 页面一打开就执行，放入ready是为了layer所需配件（css、扩展模块）加载完毕
        GO_NEXT_APGE.index = layer.open({ // 官网欢迎页
            type : 2,
            fix : true,
            shadeClose : true,
            closeBtn : false,
            title : "",
            area : [ '100%', '100%' ],
            content : html,
        });
    },
    hide : function closehtml(index) {
        layer.close(index);
        GO_NEXT_APGE.index = -1;
    }
}

function ShowLoading(str) {
    G_POP_LOADING.show(str);
}

function HideLoading() {
    G_POP_LOADING.hide();
}
var G_POP_LOADING = {
    index : -1,
    show : function(str) {
        if (G_POP_LOADING.index == -1) {
            G_POP_LOADING.index = layer.open({
                type : 2,
                shadeClose : false,
                content : (str ? str : '')
            });
        }
    },
    hide : function() {
        layer.close(G_POP_LOADING.index);
        G_POP_LOADING.index = -1;
    }
}