---
name: scikit-learn
excerpt: "scikit-learn is a Python module for machine learning built on top of SciPy and is distributed under the 3-Clause BSD license."
website: https://scikit-learn.org
type: code

github:
  url: https://github.com/scikit-learn/scikit-learn
  watches: 2261
  stars: 36741
  forks: 18063
  license: New BSD License
  languages: [ "Python" ]

provider:
  name: scikit-learn
  domain: scikit-learn.org

topics:
  - AI
  - Machine Learning

images:
  - url: https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png
    width: 1200
    height: 646
    title: "scikit-learn"
---
scikit-learn is a Python module for machine learning built on top of SciPy and is distributed under the 3-Clause BSD license.

The project was started in 2007 by David Cournapeau as a Google Summer of Code project, and since then many volunteers have contributed. See the [About us](http://scikit-learn.org/dev/about.html#authors) page for a list of core contributors.

It is currently maintained by a team of volunteers.

Website: http://scikit-learn.org

## Installation

### Dependencies

scikit-learn requires:

* Python (>= 3.5)
* NumPy (>= 1.11.0)
* SciPy (>= 0.17.0)
* joblib (>= 0.11)

**Scikit-learn 0.20 was the last version to support Python 2.7 and Python 3.4.** scikit-learn 0.21 and later require Python 3.5 or newer.

Scikit-learn plotting capabilities (i.e., functions start with `plot_` and classes end with "Display") require Matplotlib (>= 1.5.1). For running the examples Matplotlib >= 1.5.1 is required. A few examples require scikit-image >= 0.12.3, a few examples require pandas >= 0.18.0.

### User installation

If you already have a working installation of numpy and scipy, the easiest way to install scikit-learn is using `pip`

```
pip install -U scikit-learn
```

or `conda`:

```
conda install scikit-learn
```

The documentation includes more detailed [installation instructions](http://scikit-learn.org/stable/install.html).
