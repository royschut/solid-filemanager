"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_1 = require("@material-ui/core/Button");
var TextField_1 = require("@material-ui/core/TextField");
var Dialog_1 = require("@material-ui/core/Dialog");
var DialogActions_1 = require("@material-ui/core/DialogActions");
var DialogContent_1 = require("@material-ui/core/DialogContent");
var DialogTitle_1 = require("@material-ui/core/DialogTitle");
var react_redux_1 = require("react-redux");
var Actions_1 = require("../../../Actions/Actions");
var actionTypes_1 = require("../../../Actions/actionTypes");
var FormDialog = /** @class */ (function (_super) {
    __extends(FormDialog, _super);
    function FormDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textField = react_1.createRef();
        return _this;
    }
    FormDialog.prototype.handleSubmit = function (event) {
        var textField = this.textField.current;
        if (textField) {
            var folderName = textField.value;
            this.props.handleSubmit(event, { folderName: folderName });
        }
    };
    FormDialog.prototype.render = function () {
        var _a = this.props, handleClose = _a.handleClose, handleSubmit = _a.handleSubmit, open = _a.open;
        return (react_1.default.createElement(Dialog_1.default, { open: open, onClose: handleClose, "aria-labelledby": "form-dialog-create-folder", fullWidth: true, maxWidth: 'sm' },
            react_1.default.createElement("form", null,
                react_1.default.createElement(DialogTitle_1.default, { id: "form-dialog-create-folder" }, "Create folder"),
                react_1.default.createElement(DialogContent_1.default, null,
                    react_1.default.createElement(TextField_1.default, { autoFocus: true, fullWidth: true, margin: "dense", label: "Folder name", type: "text", inputRef: this.textField })),
                react_1.default.createElement(DialogActions_1.default, null,
                    react_1.default.createElement(Button_1.default, { onClick: handleClose, color: "primary", type: "button" }, "Cancel"),
                    react_1.default.createElement(Button_1.default, { color: "primary", type: "submit", onClick: this.handleSubmit.bind(this) }, "Save")))));
    };
    return FormDialog;
}(react_1.Component));
var mapStateToProps = function (state) {
    return {
        open: state.visibleDialogs.CREATE_FOLDER
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        handleClose: function () {
            dispatch(Actions_1.closeDialog(actionTypes_1.DIALOGS.CREATE_FOLDER));
        },
        handleSubmit: function (event, _a) {
            var folderName = _a.folderName;
            event.preventDefault();
            dispatch(Actions_1.createNewFolder(folderName));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(FormDialog);
