---
name: Apache MXNet
excerpt: "Apache MXNet (incubating) is a deep learning framework designed for both efficiency and flexibility. It allows you to mix symbolic and imperative programming to maximize efficiency and productivity. At its core, MXNet contains a dynamic dependency scheduler that automatically parallelizes both symbolic and imperative operations on the fly. A graph optimization layer on top of that makes symbolic execution fast and memory efficient. MXNet is portable and lightweight, scaling effectively to multiple GPUs and multiple machines."
website: https://mxnet.apache.org/
type: code

github:
  url: https://github.com/apache/incubator-mxnet
  watches: 1200
  stars: 18100
  forks: 6400
  license: Apache License 2.0
  languages: [ "Python", "C++" ]

provider:
  name: Apache
  domain: apache.org
  images:
    - url: /assets/images/organizations/apache.org-50x50.jpg
      width: 50
      height: 50
      
topics:
  - AI
  - Machine Learning

tags:
  - Deep Learning

images:
  - url: https://raw.githubusercontent.com/dmlc/web-data/master/mxnet/image/mxnet_logo_2.png
    width: 500
    height: 171
    title: logo
---

![banner](https://raw.githubusercontent.com/dmlc/web-data/master/mxnet/image/banner.png)

Apache MXNet (incubating) is a deep learning framework designed for both *efficiency* and *flexibility*.
It allows you to ***mix*** [symbolic and imperative programming](https://mxnet.apache.org/api/architecture/program_model)
to ***maximize*** efficiency and productivity.
At its core, MXNet contains a dynamic dependency scheduler that automatically parallelizes both symbolic and imperative operations on the fly.
A graph optimization layer on top of that makes symbolic execution fast and memory efficient.
MXNet is portable and lightweight, scaling effectively to multiple GPUs and multiple machines.

MXNet is more than a deep learning project. It is a collection of
[blue prints and guidelines](https://mxnet.apache.org/api/architecture/overview) for building
deep learning systems, and interesting insights of DL systems for hackers.

Ask Questions
-------------
* Please use [discuss.mxnet.io](https://discuss.mxnet.io/) for asking questions.
* Please use [mxnet/issues](https://github.com/apache/incubator-mxnet/issues) for reporting bugs.
* [Frequent Asked Questions](https://mxnet.apache.org/faq/faq.html)

How to Contribute
-----------------
* [Contribute to MXNet](https://mxnet.apache.org/community/contribute.html)

What's New
----------
* [Version 1.5.1 Release](https://github.com/apache/incubator-mxnet/releases/tag/1.5.1) - MXNet 1.5.1 Patch Release.
* [Version 1.5.0 Release](https://github.com/apache/incubator-mxnet/releases/tag/1.5.0) - MXNet 1.5.0 Release.
* [Version 1.4.1 Release](https://github.com/apache/incubator-mxnet/releases/tag/1.4.1) - MXNet 1.4.1 Patch Release.
* [Version 1.4.0 Release](https://github.com/apache/incubator-mxnet/releases/tag/1.4.0) - MXNet 1.4.0 Release.
* [Version 1.3.1 Release](https://github.com/apache/incubator-mxnet/releases/tag/1.3.1) - MXNet 1.3.1 Patch Release.
* [Version 1.3.0 Release](https://github.com/apache/incubator-mxnet/releases/tag/1.3.0) - MXNet 1.3.0 Release.
* [Version 1.2.0 Release](https://github.com/apache/incubator-mxnet/releases/tag/1.2.0) - MXNet 1.2.0 Release.
* [Version 1.1.0 Release](https://github.com/apache/incubator-mxnet/releases/tag/1.1.0) - MXNet 1.1.0 Release.
* [Version 1.0.0 Release](https://github.com/apache/incubator-mxnet/releases/tag/1.0.0) - MXNet 1.0.0 Release.
* [Version 0.12.1 Release](https://github.com/apache/incubator-mxnet/releases/tag/0.12.1) - MXNet 0.12.1 Patch Release.
* [Version 0.12.0 Release](https://github.com/apache/incubator-mxnet/releases/tag/0.12.0) - MXNet 0.12.0 Release.
* [Version 0.11.0 Release](https://github.com/apache/incubator-mxnet/releases/tag/0.11.0) - MXNet 0.11.0 Release.
* [Apache Incubator](http://incubator.apache.org/projects/mxnet.html) - We are now an Apache Incubator project.
* [Version 0.10.0 Release](https://github.com/dmlc/mxnet/releases/tag/v0.10.0) - MXNet 0.10.0 Release.
* [Version 0.9.3 Release](./docs/architecture/release_note_0_9.md) - First 0.9 official release.
* [Version 0.9.1 Release (NNVM refactor)](./docs/architecture/release_note_0_9.md) - NNVM branch is merged into master now. An official release will be made soon.
* [Version 0.8.0 Release](https://github.com/dmlc/mxnet/releases/tag/v0.8.0)
* [Updated Image Classification with new Pre-trained Models](./example/image-classification)
* [Notebooks How to Use MXNet](https://github.com/d2l-ai/d2l-en)
* [MKLDNN for Faster CPU Performance](docs/python_docs/python/tutorials/performance/backend/mkldnn/mkldnn_readme.md)
* [MXNet Memory Monger, Training Deeper Nets with Sublinear Memory Cost](https://github.com/dmlc/mxnet-memonger)
* [Tutorial for NVidia GTC 2016](https://github.com/dmlc/mxnet-gtc-tutorial)
* [MXNet.js: Javascript Package for Deep Learning in Browser (without server)](https://github.com/dmlc/mxnet.js/)
* [Guide to Creating New Operators (Layers)](https://mxnet.apache.org/api/faq/new_op)
* [Go binding for inference](https://github.com/songtianyi/go-mxnet-predictor)
* [Amalgamation and Go Binding for Predictors](https://github.com/jdeng/gomxnet/) - Outdated
* [Large Scale Image Classification](https://github.com/apache/incubator-mxnet/tree/master/example/image-classification)

Contents
--------
* [Website](https://mxnet.apache.org)
* [Documentation](https://mxnet.apache.org/api)
* [Blog](https://mxnet.apache.org/blog)
* [Code Examples](https://github.com/apache/incubator-mxnet/tree/master/example)
* [Installation](https://mxnet.apache.org/get_started)
* [Features](https://mxnet.apache.org/features)
* [Ecosystem](https://mxnet.apache.org/ecosystem)

Features
--------
* Design notes providing useful insights that can re-used by other DL projects
* Flexible configuration for arbitrary computation graph
* Mix and match imperative and symbolic programming to maximize flexibility and efficiency
* Lightweight, memory efficient and portable to smart devices
* Scales up to multi GPUs and distributed setting with auto parallelism
* Support for [Python](https://mxnet.apache.org/api/python), [Scala](https://mxnet.apache.org/api/scala), [C++](https://mxnet.apache.org/api/cpp), [Java](https://mxnet.apache.org/api/java), [Clojure](https://mxnet.apache.org/api/clojure), [R](https://mxnet.apache.org/api/r), [Go](https://github.com/jdeng/gomxnet/), [Javascript](https://github.com/dmlc/mxnet.js/), [Perl](https://mxnet.apache.org/api/perl), [Matlab](https://github.com/apache/incubator-mxnet/tree/master/matlab), and [Julia](https://mxnet.apache.org/api/julia)
* Cloud-friendly and directly compatible with AWS S3, AWS Deep Learning AMI, AWS SageMaker, HDFS, and Azure

License
-------
Licensed under an [Apache-2.0](https://github.com/apache/incubator-mxnet/blob/master/LICENSE) license.

Reference Paper
---------------

Tianqi Chen, Mu Li, Yutian Li, Min Lin, Naiyan Wang, Minjie Wang, Tianjun Xiao,
Bing Xu, Chiyuan Zhang, and Zheng Zhang.
[MXNet: A Flexible and Efficient Machine Learning Library for Heterogeneous Distributed Systems](https://github.com/dmlc/web-data/raw/master/mxnet/paper/mxnet-learningsys.pdf).
In Neural Information Processing Systems, Workshop on Machine Learning Systems, 2015

History
-------
MXNet emerged from a collaboration by the authors of [cxxnet](https://github.com/dmlc/cxxnet), [minerva](https://github.com/dmlc/minerva), and [purine2](https://github.com/purine/purine2). The project reflects what we have learned from the past projects. MXNet combines aspects of each of these projects to achieve flexibility, speed, and memory efficiency.