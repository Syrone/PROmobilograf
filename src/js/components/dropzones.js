import Dropzone from "dropzone";

const dropzones = document.querySelectorAll('.dropzone-files'),
			avatarDropzones = document.querySelectorAll('.dropzone-avatar')

const previewTemplate = `
	<div class="dz-preview dz-file-preview">
		<div class="dz-image"><img data-dz-thumbnail /></div>
		<div class="dz-details">
			<div class="dz-filename"><span data-dz-name></span></div>
			<div class="dz-size" data-dz-size></div>
		</div>
		<div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
		<div class="dz-error-message"><span data-dz-errormessage></span></div>
		<div class="dz-success-mark">
			<span class="icon">
				<svg>
					<use xlink:href="img/icons/success.svg#svg-success"></use>
				</svg>
			</span>
		</div>
		<div class="dz-error-mark">
			<span class="icon">
				<svg>
					<use xlink:href="img/icons/x-circle.svg#svg-x-circle"></use>
				</svg>
			</span>
			<div class="dz-filename"><span data-dz-name></span></div>
			<div class="dz-size" data-dz-size></div>
		</div>
	</div>
`;

const previewTemplateAvatar = `
	<div class="dz-preview dz-file-preview">
		<div class="dz-image"><img data-dz-thumbnail /></div>
		<div class="dz-details">
			<div class="dz-filename"><span data-dz-name></span></div>
			<div class="dz-size" data-dz-size></div>
		</div>
		<div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
		<div class="dz-error-message"><span data-dz-errormessage></span></div>
		<div class="dz-success-mark">
			<span class="icon">
				<svg>
					<use xlink:href="img/icons/success.svg#svg-success"></use>
				</svg>
			</span>
		</div>
		<div class="dz-error-mark">
			<span class="icon">
				<svg>
					<use xlink:href="img/icons/x-circle.svg#svg-x-circle"></use>
				</svg>
			</span>
			<div class="dz-filename"><span data-dz-name></span></div>
			<div class="dz-size" data-dz-size></div>
		</div>
	</div>
`;

dropzones?.forEach((el) => {
	const wrapper = el.querySelector('.dz-wrapper')

	new Dropzone(el, {
		paramName: "file",
		maxFilesize: 2,
		previewTemplate: previewTemplate,
		init: function() {
			this.on("addedfile", file => {
				wrapper.appendChild(file.previewElement);
			});
		}
	});
})

avatarDropzones?.forEach((el) => {

	new Dropzone(el, {
		paramName: "file",
		maxFilesize: 2,
		previewTemplate: previewTemplateAvatar,
		maxFiles: 1,
		init: function() {
      this.on("addedfile", function(file) {
        if (this.files.length > 1) {
          this.removeFile(this.files[0]);
        }
      });
      this.on("maxfilesexceeded", function(file) {
        this.removeAllFiles();
        this.addFile(file);
      });
    }
	});
})