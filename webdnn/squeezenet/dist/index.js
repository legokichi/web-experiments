(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Main = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var class_index, model, _a, width, height, ch, source, ctx, _loop_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("main");
                    console.time("class_index");
                    return [4 /*yield*/, fetch("./imagenet_class_index.json").then(function (res) { return res.json(); })];
                case 1:
                    class_index = _b.sent();
                    //console.log(class_index);
                    console.timeEnd("class_index");
                    console.time("ready");
                    model = new window["KerasJS"].Model({
                        filepaths: {
                            model: './model.json',
                            weights: './model_weights.buf',
                            metadata: './model_metadata.json'
                        },
                        gpu: true
                    });
                    return [4 /*yield*/, model.ready()];
                case 2:
                    _b.sent();
                    _a = model.inputTensors.input_1.tensor.shape, width = _a[0], height = _a[1], ch = _a[2];
                    //console.log(model);
                    console.timeEnd("ready");
                    return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                            var stream, url, video_1, img;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!1) return [3 /*break*/, 3];
                                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ video: true, audio: false })];
                                    case 1:
                                        stream = _a.sent();
                                        url = URL.createObjectURL(stream);
                                        video_1 = document.createElement("video");
                                        video_1.src = url;
                                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                                video_1.addEventListener("loadeddata", resolve, { once: true });
                                                video_1.addEventListener("error", reject, { once: true });
                                            })];
                                    case 2:
                                        _a.sent();
                                        video_1.autoplay = true;
                                        video_1.width = video_1.videoWidth;
                                        video_1.height = video_1.videoHeight;
                                        return [2 /*return*/, video_1];
                                    case 3: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                            var img = new Image();
                                            img.src = "../crop.jpg";
                                            img.onload = function () { return resolve(img); };
                                            img.onerror = reject;
                                        })];
                                    case 4:
                                        img = _a.sent();
                                        return [2 /*return*/, img];
                                }
                            });
                        }); })()];
                case 3:
                    source = _b.sent();
                    ctx = document.getElementById("cnv").getContext("2d");
                    ctx.canvas.width = width;
                    ctx.canvas.height = height;
                    _loop_1 = function () {
                        var imgdata, data, ptr, i, r, g, b, a, inputData, outputData, top3, output, sorted, top10, ul;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    ctx.drawImage(source, 0, 0, source.width, source.height, 0, 0, width, height);
                                    imgdata = ctx.getImageData(0, 0, width, height);
                                    if (imgdata.data.length !== (ch + 1) * width * height) {
                                        console.error(imgdata);
                                        throw new Error("image size error");
                                    }
                                    data = new Float32Array(ch * width * height);
                                    ptr = 0;
                                    for (i = 0; i < imgdata.data.length; i += 4) {
                                        r = imgdata.data[i + 0];
                                        g = imgdata.data[i + 1];
                                        b = imgdata.data[i + 2];
                                        a = imgdata.data[i + 3];
                                        data[ptr + 0] = r;
                                        data[ptr + 1] = g;
                                        data[ptr + 2] = b;
                                        ptr += 3;
                                    }
                                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10); })];
                                case 1:
                                    _a.sent();
                                    console.time("predict");
                                    inputData = { 'input_1': new Float32Array(data) };
                                    return [4 /*yield*/, model.predict(inputData)];
                                case 2:
                                    outputData = _a.sent();
                                    console.timeEnd("predict");
                                    //console.log(outputData);
                                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10); })];
                                case 3:
                                    //console.log(outputData);
                                    _a.sent();
                                    top3 = [];
                                    output = outputData[Object.keys(outputData)[0]];
                                    console.time("sort");
                                    sorted = new Float32Array(output).sort().reverse();
                                    console.timeEnd("sort");
                                    top10 = Array.from(sorted.slice(0, 10)).map(function (val, i) { return ({ cat: class_index[output.indexOf(sorted[i])], val: val }); });
                                    ul = document.getElementById("result");
                                    if (ul == null) {
                                        throw new Error("dom not found");
                                    }
                                    ul.innerHTML = "";
                                    console.log(top10);
                                    top10.forEach(function (_a) {
                                        var cat = _a.cat, val = _a.val;
                                        var li = document.createElement("li");
                                        if (cat != null) {
                                            li.appendChild(document.createTextNode(cat[1]));
                                        }
                                        else {
                                            li.appendChild(document.createTextNode("error"));
                                        }
                                        ul.appendChild(li);
                                    });
                                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10); })];
                                case 4:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _b.label = 4;
                case 4:
                    if (!true) return [3 /*break*/, 6];
                    return [5 /*yield**/, _loop_1()];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 6: return [2 /*return*/];
            }
        });
    });
}
main().catch(function (ev) {
    console.error(ev, ev.error);
    alert(ev + ":" + ev.error);
});

},{}]},{},[1])(1)
});
