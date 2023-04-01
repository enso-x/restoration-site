export const IMAGE_PREVIEW_MODAL_KEY = 'feedback';

export default function ImagePreview() {
	return (
		<div className="modal-background" data-modal={ IMAGE_PREVIEW_MODAL_KEY }>
			<div className="modal modal:image">
				<button className="modal__close" data-modal-close={ IMAGE_PREVIEW_MODAL_KEY }>
					<img src="/images/close.svg" alt="Close icon"/>
				</button>
				<img className="modal-content" id="img01"/>
			</div>
		</div>
	);
};
