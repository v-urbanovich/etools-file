# \<etools-file\>

This element will allow you to select and prepare the files you are gonna upload.
The component doesn't upload the files, it just manages an array of them, which is reachable from the parent component.

![alt tag](etools-file-unselected-files.png)
![alt tag](etools-file-examples.png)
![alt tag](etools-file-error.png)

## Usage

### Examples
```html
<etools-file files="{{files}}" label="Single file selection" accept=".jpg"></etools-file>

<etools-file files="{{files}}" label="Single file selection" readonly></etools-file>

<etools-file files="{{multipleFiles}}" multiple></etools-file>

<etools-file files="{{multipleFiles}}" multiple readonly></etools-file>

<etools-file files="{{files}}" 
  label="Attachement (validation error shown)" 
  invalid="[[invalid]]" 
  error-message="Error message that will show only is invalid=true">
</etools-file>
```

Properties:
* accept, String - files types to accept for selection
* disabled, Boolean, default: false
* files, Array, default: [] – notifies
* label, String, default: 'File attachment'
* multiple, Boolean, default: false
* readonly, Boolean, default: false
* uploadLabel, String, default: 'Upload File'
* invalid, Boolean, default: false
* errorMessage, String, default ''

## Styling

You can use defined variables to change main colors.

Custom property | Description | Default
 ----------------|-------------|----------
 `--etools-file-secondary-text-color` | Secondary text color | `rgba(255, 255, 255, 0.54)`
 `--etools-file-main-btn-color` | Main buttons text color(upload and download buttons) | `#00acff`
 `--etools-file-delete-btn-color` | Delete button text color | `#f1572a`
 `--etools-file-single-file-wrapper` | Mixin applied to single file name wrapper | `{}`
`--etools-file-filename-container` | Mixin applied to the filename container | `{}`
`--etools-file-readonly-filename-container` | Mixin applied to the filename container(only if it's readonly) | `{}`
`--etools-file-actions-multiple` | Mixin applied to file action buttons container if multiple is `true` | `{}`
`--etools-file-actions-single` | Mixin applied to file action buttons container for single file selection | `{}`
`--etools-file-error` | Mixin applied to the error message element | `{}`

## Install
```bash
$ bower install --save etools-file
```

## Preview element locally

Install needed dependencies by running: `$ bower install`.
Make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `$ polymer serve` to serve your element application locally.

## Running Tests

You need to have `web-component-tester` installed (if not run `npm install -g web-component-tester`)
```bash
$ wtc
```
or 
```bash
$ wtc -p
```
