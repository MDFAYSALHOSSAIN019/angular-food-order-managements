import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup
import { product } from '../../model/productInfo'; // Import the correct product interface
import { AuthService } from '../../services/auth.service';
import { ProductsService } from '../../services/products.service';
import {AngularFireStorage} from '@angular/fire/compat/storage'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'] // Correct the styleUrl property
})
export class AddProductComponent implements OnInit {
  productsList: product[] = [];
  productObj: product = {
    id: '',
    name: '',
    description: '',
    price: 0,
    category: '',
    imageUrl: '',
    addedOn: '',
    modifiedOn: '',
    isAvailable: true
  };

  productForm: FormGroup= this.fb.group({
    name: '', // Use Validators.required for mandatory fields
    description: '',
    price: 0,
    category: '',
    imageUrl: ''
  });; // Define productForm as a FormGroup

  constructor(
    private auth: AuthService,
    private data: ProductsService,
    private fb: FormBuilder, // Inject FormBuilder
    private fireStroage:AngularFireStorage
  ) {}

  ngOnInit(): void {
    
  }

  resetForm() {
    this.productForm.reset({
      name: '',
      description: '',
      price: 0,
      category: '',
      imageUrl: ''
    });
  }

  addProduct() {
    if (this.productForm.invalid) {
      alert('Fill all required fields');
      return;
    }

    const productData: product = this.productForm.value;

    this.data.addProduct(productData);
    this.resetForm();
  }


// onImageSelected(event: Event) {
//   const file = event.target?.files?.[0];
//   this.selectedImage = file;
//   this.productForm.patchValue({ image: file }); // Update form control
// }

// addProduct() {
//   if (this.productForm.invalid) {
//     alert('Fill all required fields');
//     return;
//   }

//   const productData: product = this.productForm.value;

//   // Upload image to Firebase Storage before adding product
//   if (this.selectedImage) {
//     const filePath = `products/${this.selectedImage.name}`;
//     const task = this.fireStroage.upload(filePath, this.selectedImage);

//     task.snapshotChanges().pipe(finalize(() => {
//       const downloadURL = task.snapshot.ref.getDownloadURL();
//       productData.imageUrl = downloadURL; // Update image URL
//       this.data.addProduct(productData);
//       this.resetForm();
//     })).subscribe();
//   } else {
//     // Handle case when no image is selected
//     alert('Please select an image');
//   }
// }

}