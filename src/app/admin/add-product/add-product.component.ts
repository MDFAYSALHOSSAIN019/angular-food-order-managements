import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup
import { product } from '../../model/data-type'; // Import the correct product interface
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
  // productObj: product = {
  //   // id: '',
  //   name: '',
  //   description: '',
  //   price: 0,
  //   category: '',
  //   image: '',
  //   // addedOn: '',
  //   // modifiedOn: '',
  //   // isAvailable: true
  // };

  productForm: FormGroup= this.fb.group({
    name: '', // Use Validators.required for mandatory fields
    description: '',
    price: 0,
    category: '',
    imageUrl: ''
  });
  
  // Define productForm as a FormGroup
  addProductMessage: string | undefined;
  constructor(
    private auth: AuthService,
    private product: ProductsService,
    private fb: FormBuilder, // Inject FormBuilder
    private fireStroage:AngularFireStorage
  ) {}

  ngOnInit(): void {
    
  }

  // resetForm() {
  //   this.productForm.reset({
  //     name: '',
  //     description: '',
  //     price: 0,
  //     category: '',
  //     imageUrl: ''
  //   });
  // }

  // addProduct() {
  //   if (this.productForm.invalid) {
  //     alert('Fill all required fields');
  //     return;
  //   }

  //   const productData: product = this.productForm.value;

  //   this.product.addProduct(productData);
  //   this.resetForm();
  // }

  resetForm() {
    // Clear form fields and any error messages
    const form = document.getElementById('addProduct') as HTMLFormElement; // Get the form element
    if (form) {
      form.reset(); // Reset the form using its built-in method
  
      // Clear any error messages manually (if not cleared automatically)
      const errorMessages = document.querySelectorAll('.error-text');
      errorMessages.forEach((message) => (message.textContent = ''));
    }
  }
  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
        this.resetForm();
      }
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 3000);
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