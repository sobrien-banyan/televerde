import { Button } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

wp.blocks.registerBlockType("customgutenbergblock/custom-gutenberg-block", {
  title: "Custom Gutenberg Block",
  icon: "video-alt3",
  category: "media",
  attributes: {
    name: { type: "string" },
    description: { type: "string" },
    imageURL: { type: "string" },
    imageID: { type: "string" },
    vimeoVideoId: { type: "string" },
    videoURL: { type: "string" },
    videoID: { type: "string" },
    backgroundImage: {
      type: "string",
      default: null,
    },
  },
  edit: function ({ attributes, setAttributes }) {
    const { name, imageURL, videoURL, backgroundImage, show } = attributes;
    const ALLOWED_MEDIA_TYPES = ["image", "video"];
    function onHandleChange(e) {
      console.log(attributes);
      setAttributes({ [e.target.name]: e.target.value });
    }

    const editContainerStyles = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
      heigth: "auto",
      width: "auto",
      padding: "16px",
      border: "1px solid black",
      borderRadius: "10px",
      maxWidth: "500px",
      minWidth: "150px",
      margin: "0px 20px 0px 20px",
    };

    const mediaUploadButtonContainerStyles = {
      border: "1px solid black",
      borderRadius: "10px",
      marginTop: "10px",
      padding: "4px",
      marginLeft: "5px",
    };

    const editInputStyles = {
      width: "80%",
      marginBottom: "12px",
    };

    const editLabelStyles = {
      marginBottom: "2px",
      paddingLeft: "4px",
    };

    const mediaButtonContainerStyles = {
      display: "flex",
      flexDirection: "row",
      width: "auto",
      alignItems: "center",
      justifyContent: "space-evenly",
    };

    return (
      <div style={editContainerStyles}>
        <label style={editLabelStyles}>
          Interviewers Name (first and last)
        </label>
        <input
          style={editInputStyles}
          type="text"
          name="name"
          placeholder="Enter interviewers name"
          onChange={(e) => onHandleChange(e)}
          value={attributes.name}
        />

        <label style={editLabelStyles}>Quote From Interviewer</label>
        <textarea
          style={editInputStyles}
          type="text"
          rows="6"
          name="description"
          placeholder="Enter description"
          onChange={(e) => onHandleChange(e)}
          value={attributes.description}
        />


        <label style={editLabelStyles}>Video Vimeo Id</label>
        <input
          style={editInputStyles}
          type="text"
          name="vimeoVideoId"
          placeholder="Enter Vimeo Video Id"
          onChange={(e) => onHandleChange(e)}
          value={attributes.vimeoVideoId}
        />

        <div style={mediaButtonContainerStyles}>
          <div style={mediaUploadButtonContainerStyles}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) => {
                  setAttributes({ imageURL: media.url, imageID: "" });
                }}
                allowedTypes={ALLOWED_MEDIA_TYPES}
                value={"mediaId"}
                render={({ open }) => (
                  <Button onClick={open}>Apply Image</Button>
                )}
              />
            </MediaUploadCheck>
          </div>

          <div style={mediaUploadButtonContainerStyles}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(media) => {
                  setAttributes({ videoURL: media.url, videoID: "" });
                }}
                allowedTypes={ALLOWED_MEDIA_TYPES}
                value={"mediaId"}
                render={({ open }) => (
                  <Button onClick={open}>Apply Short Video</Button>
                )}
              />
            </MediaUploadCheck>
          </div>
        </div>
      </div>
    );
  },
  save: function ({ attributes }) {

    return (
      <section class="round-table video">

        <video src={attributes.videoURL} poster={attributes.imageURL} type="video/mp4" preload="auto" muted></video>

        <img src={attributes.imageURL} alt="" />

        <blockquote>
          <p>
            "{attributes.description}"
          </p>
        </blockquote>

        <div class="play-fullscreen" role="button">
          <a href="#">
            <img src="https://televerde.com/wp-content/uploads/2023/03/play.svg" alt="" />
            {attributes.name}
            <div data-vimeo-id={attributes.vimeoVideoId} data-vimeo-defer id={attributes.vimeoVideoId}></div>
          </a>
        </div>

      </section>
    );
  },
});
