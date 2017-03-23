import React from 'react';
import { Card, CardTitle, CardPanel} from 'react-materialize';
import { Col } from 'react-materialize';	
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';

var size = {}

export default class MyCardUpload extends React.Component {
		constructor(){
		super()
		this.state = {
			images: []
		}
	}

	uploadFile(files){
		console.log('uploadFile: ')
		const image = files[0]

		const cloudName = 'tcbcproject3'
		const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

		const timestamp = Date.now()/1000
		const uploadPreset = 'hfyqt6x8'

		const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'kqXiby_hRsH3eTSik5A1uJL29mI'
		const signature = sha1(paramsStr)

		const params = {
			'api_key': '958293418998218',
			'timestamp': timestamp,
			'upload_preset': uploadPreset,
			'signature': signature		
		}

		let uploadRequest = superagent.post(url)
		uploadRequest.attach('file', image)

		Object.keys(params).forEach((key) => {
			uploadRequest.field(key, params[key])
		})

		uploadRequest.end((err, resp) => {
			if (err){
				alert(err)
				return
			}

			console.log('UPLOAD COMPLETE: '+JSON.stringify(resp.body))
			const uploaded = resp.body

			let updatedImages = Object.assign([], this.state.images)
			updatedImages.push(uploaded)

			this.setState({
				images: updatedImages
			})
		})
	}

	render(){
		const list = this.state.images.map((image, i) => {
			return (
				<Col s={6}>
				<Card className='small'
		  header={<CardTitle image={image.secure_url}>Card Title</CardTitle>}
		  actions={[<a key="link" href='#'>This is a Link</a>]}>
		  I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
		</Card>
		</Col>
			)
		})

		return (
			<div>
				<Dropzone
				style={size}
				onDrop={this.uploadFile.bind(this)}
				multiple={false}
				 > 
    <div className="file-field input-field">
      <div className="btn">
        <span>File</span>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
  </Dropzone>
  <Col s={12}>

                                  <CardPanel>
                                    <div className="video-container">
                                        <iframe width="640" height="360" src="https://www.youtube.com/embed/10r9ozshGVE" frameBorder="0" allowFullScreen=""></iframe>
                                    </div>
                                  </CardPanel>
                                </Col>
				{list}
			</div>	
		)
	}
}